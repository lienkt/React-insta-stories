import React from "react";
import Stories from 'react-insta-stories'

const StoryItems = (props) => {
  
  const storyData = (storyList) => {
    if (storyList) {
      console.log(storyList)
      return storyList.map((data) => {
        return {
          content: () => {
            return <div className="story-img">
              <img className="story-img" src={require('../assets/images/' + data)} alt=""/>
            </div>
          }
        }
      });
    }
  };
  
  const closeStoryFrom = () => {
    console.log('One story ended');
    props.closeStoryFrom();
  }

  const closeAllStoryFrom = (s, st) => {
    console.log('All story ended', s, st);
    props.closeStoryFrom();
    if (props.story.shopId < 2) {
      props.openStoryFrom(props.story.shopId + 1);
    }
  }

  const stories = ({ shop, story}) => {
    if (shop && story) {
      if (story.shopId >= 0) {
        let storyList = shop[story.shopId].stories
        return <div className="story-item">
          <Stories
          width={"100%"}
          height={"100%"}
          defaultInterval={3600}
          stories={storyData(storyList)}
					onAllStoriesEnd={(s, st) => closeAllStoryFrom(s, st)}
          storyContainerStyles={{ overflow: 'hidden' }} />
          <img
            className="close-img" onClick={closeStoryFrom}
            src={require('../assets/icons/close.png')}
            alt=""/>
        </div>
      }
    }
  };

  return <div className="story-form">{stories(props)}</div>;
};

export default StoryItems;