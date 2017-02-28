export const users = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER':
        return {};

    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    default:
      return state;
  }
};

export const isFetchingUser = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return true;

    case 'FETCH_USER_FULFILLED':
    case 'FETCH_USER_CANCELLED':
      return false;

    default:
      return state;
  }
};