import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
export const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.btn-load');

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

showLoader();
setTimeout(hideLoader, 100);

searchForm.addEventListener('submit', onSubmit);
loadBtn.addEventListener('click', onLoadMoreClick);

async function onSubmit(evt) {
  evt.preventDefault();
  hideLoadMore();
  showLoader();
  gallery.innerHTML = '';
  query = evt.target.elements.search.value.trim();
  currentPage = 1;

  if (!query) {
    iziToast.show({
      message: 'Please fill in the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  let data;

  try {
    data = await getImage(query, currentPage);
    maxPage = Math.ceil(data.totalHits / pageSize);

    if (data.hits.length === 0) {
      iziToast.error({
        maxWidth: '432px',
        height: '48px',
        theme: 'dark',
        progressBarColor: '#FFFFFF',
        color: '#EF4040',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(data.hits);
    }
  } catch (err) {
    iziToast.error({
      maxWidth: '432px',
      height: '48px',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
      message: 'Sorry, an error occurred while loading. Please try again!',
    });
  }

  hideLoader();

  if (data.hits.length !== 0) {
    checkBtnStatus();
  }

  evt.target.reset();
}

async function onLoadMoreClick() {
  currentPage += 1;
  hideLoadMore();
  showLoader();
  try {
    const data = await getImage(query, currentPage);
    renderGallery(data.hits);
  } catch (err) {
    iziToast.error({
      maxWidth: '432px',
      height: '48px',
      message: 'Sorry, an error occurred while loading. Please try again!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
  }

  myScroll();
  hideLoader();
  checkBtnStatus();
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

function showLoadMore() {
  loadBtn.classList.remove('hidden');
}

function hideLoadMore() {
  loadBtn.classList.add('hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
    iziToast.show({
      maxWidth: '432px',
      height: '48px',
      message: "We're sorry, but you've reached the end of search results.",
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: 'blue',
      position: 'topRight',
    });
  } else {
    showLoadMore();
  }
}

function myScroll() {
  const firstChild = gallery.firstElementChild;
  if (firstChild && firstChild.nodeType === 1) {
    const height = firstChild.getBoundingClientRect().height;
    const scrollAmount = height * 2;
    if (scrollAmount > 0) {
      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  }
}

// function myScroll() {
//   const height = gallery.firstElementChild.getBoundingClientRect().height;
//   scrollBy({
//     top: height * 2.5,
//     behavior: 'smooth',
//   });
// }
