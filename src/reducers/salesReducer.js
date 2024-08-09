const salesReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_SALE':
        return { sales: [...state.sales, action.payload] };
      default:
        return state;
    }
  };
  
  export default salesReducer;
  