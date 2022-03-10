import React, { Component } from "react";
import { connect } from "react-redux";
import { getShops, setStory } from "../actions";
import ShopItems from "../components/ShopItems";
import StoryItems from "../components/StoryItems";
import "../styles/App.css";
import verified from "../assets/icons/verified.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStoryItems: false,
    };
  }

  componentDidMount() {
    this.props.getShops();
    this.props.setStory(false, -1);
  }

  openStoryFrom = (id) => {
    this.props.setStory(true, id);
    this.setState({ showStoryItems: true });
    console.log(this.state.showStoryItems)
  };

  closeStoryFrom = () => {
    this.props.setStory(false, -1);
    this.setState({ showStoryItems: false });
    console.log(this.state.showStoryItems)
  };

  render() {
    return (
      <div className="App">
        <div className="Content">
          {/* Home Page */}
          <div className="Home">
            <div className="Home-verify">
              <div className="verify-circle">
                <img src={verified} className="verify-icon" alt="verified" />
              </div>
              <div className="verify-info">
                <p className="id">Order #1002</p>
                <p className="thank">Thank you!</p>
              </div>
            </div>
            <div className="Home-confirm">
              <p className="message-1">Your order is confirmed</p>
              <p className="message-2">
                You’ll receive an email when your order is ready.
              </p>
              <button class="button">Track order with Shop</button>
            </div>
            {/* Shop list */}
            <div className="Home-shops">
              <ShopItems
                datalist={this.props.shop.list}
                onClick={this.openStoryFrom}
              ></ShopItems>
              <p className="power">Powered by Sqwad</p>
            </div>
          </div>
          {/* Story Page */}
          {this.state.showStoryItems && (
            <div className="Story">
              <StoryItems
                shop={this.props.shop.list}
                story={this.props.story.stories}
                openStoryFrom={this.openStoryFrom}
                closeStoryFrom={this.closeStoryFrom}
              ></StoryItems>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shop: state.shop,
    story: state.story,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShops: () => dispatch(getShops()),
    setStory: (isShow, id) => dispatch(setStory(isShow, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
