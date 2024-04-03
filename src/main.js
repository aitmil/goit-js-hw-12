import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.lightbox a', { captionsData: 'alt' });
lightbox.on('show.simplelightbox', function () {});

showLoader();
setTimeout(hideLoader, 100);

searchForm.addEventListener('submit', onSubmit);

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

async function onSubmit(evt) {
  evt.preventDefault();
  const query = evt.target.elements.search.value.trim();

  if (query !== '') {
    gallery.innerHTML = '';
    showLoader();
    try {
      const data = await getImage(query);
      const markup = galleryTemplate(data.hits);
      gallery.innerHTML = markup;
      lightbox.refresh();
      if (data.hits.length === 0) {
        iziToast.error({
          maxWidth: '432px',
          height: '48px',
          color: 'red',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    } catch (err) {
      console.log(err);
    }
    hideLoader();
  }
  evt.target.reset();
}
