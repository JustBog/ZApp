const area = state => state.frontPage;

export function getImages(state) {
  return area(state).get('images');
}
