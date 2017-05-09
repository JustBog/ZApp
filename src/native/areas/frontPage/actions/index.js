export const SET_IMAGES = 'SET_IMAGES';
export const LOAD_IMAGES = 'LOAD_IMAGES';

export function setImages(data) {
  return {
    type: SET_IMAGES,
    data
  }
}

export function loadImages() {
  return {
    type: LOAD_IMAGES
  }
}
