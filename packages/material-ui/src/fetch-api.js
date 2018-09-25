/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

export const postData = ({
  apiURL,
  endpoint,
  headers = {},
  data = {},
}) => fetch(`${apiURL}${endpoint}`, {
  headers: Object.assign({}, {
    'Content-Type': 'application/json; charset=utf-8',
  }, headers),
  method: 'POST',
  body: JSON.stringify(data),
}).then(res => res.json()).catch(error => console.error('Error:', error));
