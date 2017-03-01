// reducers always return a new instance

export const users = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
        return [];

    case 'FETCH_USER_FULFILLED':
      return [action.payload];

    default:
      return state;
  }
};