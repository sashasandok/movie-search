const apiBaseUrl = 'https://api.themoviedb.org/'

export const key = 'b5829a9af606f1c112b9231fc5b77557'

const apiImageUrl = 'https://image.tmdb.org/t/p/w500'

const apiUrl = endpoint => apiBaseUrl + endpoint
export const imageUrl = endpoint => apiImageUrl + endpoint

export const get = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
