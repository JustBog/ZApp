import { put, call, takeEvery, all } from 'redux-saga/effects'
import * as actions from '../actions';

const API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20flickr.photos.recent%20\
where%20api_key%3D00ac5f70d662304b87e7da585bbdef9d&format=json&diagnostics=true&callback=';

export function* frontPageSagas() {
  yield all([
    takeEvery(actions.LOAD_IMAGES, loadImagesInfo)
  ]);
}

function getDataFromApi() {
  return new Promise((resolve, reject)=> {
    const url = API_URL;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        resolve(res.query.results.photo);
      })
      .catch(error => {
        alert(error);
      });
  });
}

function* loadImagesInfo() {
  try {
    yield put(actions.setLoadingStatus(true));
    const response = yield getDataFromApi();
    yield put(actions.setImages(response));
  } catch (e) {
    alert(e);
  } finally {
    yield put(actions.setLoadingStatus(false));
  }
}
