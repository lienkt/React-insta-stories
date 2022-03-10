import { combineReducers } from "redux";
import shop from "./ShopReducer";
import story from "./StoryReducer";

const rootReducer = combineReducers({
  shop,
  story
});

export default rootReducer;
