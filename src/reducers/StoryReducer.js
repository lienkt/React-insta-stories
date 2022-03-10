// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action) {
  switch (action.type) {
    case "SET_CURRENT_STORY":
      return {...state, stories: action.payload}
    default:
      return state;
  }
}
