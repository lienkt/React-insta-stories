export const getShops = () => ({
  type: "GET_SHOPS",
  payload: [
    {
      id: 0,
      name: "Spring",
      img: "spring.png",
      stories: ["spring_1.png", "spring_2.png", "spring_3.png"],
    },
    {
      id: 1,
      name: "All Tigers",
      img: "all_tiger.png",
      stories: ["all_tiger_1.png", "all_tiger_2.png"],
    },
    {
      id: 2,
      name: "Malucette",
      img: "malucette.png",
      stories: ["malucette_1.png"],
    },
  ],
});

export const setStory = (isShow, id) => ({
  type: "SET_CURRENT_STORY",
  payload: {
    show: isShow,
    shopId: id,
  },
});
