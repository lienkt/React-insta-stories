import React from "react";

const ShopItems = (props) => {
  
  const List = ({ datalist }) => {
    if (datalist) {
      return datalist.map((data) => {
        return <div className="shop">
          <img 
            src={require('../assets/images/' + data.img)} 
            onClick={() => props.onClick(data.id)} 
            alt=""
          />
          <p>{data.name}</p>
        </div>;
      });
    }
  };

  return <div className="shops">{List(props)}</div>;
};

export default ShopItems;
