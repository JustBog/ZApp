import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions';
import { IMAGE_URL, API_URL } from '../consts';

export function* frontPageSagas() {
  yield [
  takeEvery(actions.LOAD_IMAGES, loadImagesInfo)
  ];
}

function getDataFromApi() {
  return new Promise((resolve, reject)=> {
    fetch(API_URL, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
console.log('antras',responseJson);
         resolve(responseJson.query.results);
      })
      .catch((error) => {
        console.log('erroras', error);
         reject(error);
      });
  });
}

function* loadImagesInfo() {
  try {
    const response = yield getDataFromApi();
    yield put(actions.setImages(response));
  } catch (e) {
    alert(e);
  }
}
