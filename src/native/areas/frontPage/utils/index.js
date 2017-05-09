/*
  Return formatted image url
*/
export function getImageUrl(farmId, server, id, secret) {
  return `https://farm${farmId}.staticflickr.com/${server}/${id}_${secret}.jpg`
}
