function AppReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "delete":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default AppReducer;
