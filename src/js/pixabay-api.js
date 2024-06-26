import axios from 'axios';

export async function getImage(query, currentPage) {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const params = {
    key: '42982989-b171e2f7a41a03eb4f5866708',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };
  const res = await axios.get('', { params });
  return res.data;
}
