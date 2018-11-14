const apiBaseUrl = ''

const apiUrl = endpoint => apiBaseUrl + endpoint

export const get = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
