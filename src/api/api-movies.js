const apiBaseUrl = 'https://api.themoviedb.org/'

const apiImageUrl =
  'https://image.tmdb.org/t/p/w500'

const apiUrl = endpoint => apiBaseUrl + endpoint
export const imageUrl = endpoint =>
  apiImageUrl + endpoint

export const get = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
