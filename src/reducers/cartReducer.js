const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    default:
      return state;
  }
};

export default cartReducer;
