import { Record } from 'immutable';
import { TEST, SET_IMAGES } from '../actions';
import * as utils from '../utils';

function setImages(state, data) {
  const images = data.photo.map(a => {
    a.url = utils.getImageUrl(a.farm, a.server, a.id, a.secret);
    return new Image(a);
  });

  return state.set('images', images);
}

export const InitialState = Record({
  images: []
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
    default:
      return state
  }
}
