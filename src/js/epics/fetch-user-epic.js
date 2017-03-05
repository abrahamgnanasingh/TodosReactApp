
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';

import CommonServices from '../services/common';

const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });

// const fakeAjax = url =>
//   Rx.Observable.of({
//     id: url.substring(url.lastIndexOf('/') + 1),
//     name: 'Abraham'
//   }).delay(2000);

// fakeAjax(`api/users/${action.payload}`)
// ajax.getJSON(`https://api.github.com/users/${action.payload}`)
// ajax.getJSON(`http://date.jsontest.com/`)

const getGithubRepositories = searchText => ({
  url: `https://api.github.com/search/repositories?q=${searchText}&page=${1}&per_page=${10}`,
  method: 'GET'
});

export const fetchUserEpic = action$ =>
  action$.ofType('FETCH_USER')
    .mergeMap(action =>
      // Rx.Observable.fromPromise(CommonServices.getDateTime())
        // .map((result) => fetchUserFulfilled(result.data))
      ajax(getGithubRepositories(action.payload))
        .map((result) => fetchUserFulfilled(result.response.items))
        .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
    );