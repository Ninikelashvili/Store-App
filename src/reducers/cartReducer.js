const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export default cartReducer;
