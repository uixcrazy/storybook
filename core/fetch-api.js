/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

function paramsToQueryStr(params) {
  return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
}

export const getData = ({
  apiURL,
  endpoint,
  headers = {},
  params = {},
}) => fetch(`${apiURL}${endpoint}?${paramsToQueryStr(params)}`, {
  headers: Object.assign({}, {
    'Content-Type': 'application/json',
  }, headers),
  method: 'GET',
}).then((res) => {
  const jsonData = res.json();
  // if (jsonData.errors) {
  //   console.log('%c---------', 'background: #222; color: #bada55');
  //   console.log(`%c${jsonData.errors.join('  ↚ ↛ ')}`, 'background: #222; color: #bada55');
  //   console.log('%c---------', 'background: #222; color: #bada55');
  // }
  return jsonData;
}).catch(error => console.error('Error:', error));

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
})
  .then(res => res.json())
  .catch(error => console.error('Error:', error));
