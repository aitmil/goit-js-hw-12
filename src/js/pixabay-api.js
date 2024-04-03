export function getImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '42982989-b171e2f7a41a03eb4f5866708';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
