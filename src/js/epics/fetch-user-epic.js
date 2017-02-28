
const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });

const fakeAjax = url =>
  Observable.of({
    id: url.substring(url.lastIndexOf('/') + 1),
    firstName: 'Bilbo',
    lastName: 'Baggins'
  }).delay(1000);

export const fetchUserEpic = action$ => {
  return action$.ofType('FETCH_USER')
          .mergeMap(action =>
            fakeAjax(`api/users/${action.payload}`)
              .map(payload => fetchUserFulfilled)
                .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
          );
};