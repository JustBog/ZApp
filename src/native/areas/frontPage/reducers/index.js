import { Record } from 'immutable';
import { SET_LOADING_STATUS, SET_IMAGES } from '../actions';
import * as utils from '../utils';

function setImages(state, data) {
  const images = data.map(a => {
    a.url = utils.getImageUrl(a.farm, a.server, a.id, a.secret);
    a.title = a.title ? a.title : 'No title';

    return new Image(a);
  });

  const oldArray = state.get('images');

  return state.set('images', oldArray.concat(images));
}

function setLoadingStatus(state, value) {
  return state.set('loading', value);
}

export const InitialState = Record({
  images: [],
  loading: false
});

export const Image = Record({
  url: '',
  title: '',
  id: null
});

export default function reducer(state = new InitialState(), action) {
  switch (action.type) {
    case SET_IMAGES:
      return setImages(state, action.data);
    case SET_LOADING_STATUS:
      return setLoadingStatus(state, action.value);
    default:
      return state
  }
}
