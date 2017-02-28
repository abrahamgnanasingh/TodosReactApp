export const fetchUser = id => ({ type: 'FETCH_USER', payload: id });

export const cancelFetchUser = () => ({ type: 'FETCH_USER_CANCELLED' });