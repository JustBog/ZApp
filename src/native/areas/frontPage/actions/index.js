export const SET_IMAGES = 'SET_IMAGES';
export const LOAD_IMAGES = 'LOAD_IMAGES';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

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

export function setLoadingStatus(value) {
  return {
    type: SET_LOADING_STATUS,
    value
  }
}
