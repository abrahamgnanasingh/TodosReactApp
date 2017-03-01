
import Rx from 'rxjs/Rx';

import CommonServices from '../services/common';

const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });

const fakeAjax = url =>
  Rx.Observable.of({
    id: url.substring(url.lastIndexOf('/') + 1),
    name: 'Abraham'
  }).delay(2000);

export const fetchUserEpic = action$ =>
  action$.ofType('FETCH_USER')
    .mergeMap(action =>
      fakeAjax(`api/users/${action.payload}`)
        .map(fetchUserFulfilled)
        .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
    );