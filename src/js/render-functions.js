import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { gallery } from '../main';

let lightbox = new SimpleLightbox('.lightbox a', { captionsData: 'alt' });
lightbox.on('show.simplelightbox', function () {});

function galleryTemplate(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        ...info
      }) => ` <div class="thumb">
      <li class="gallery-item">
        <div class="lightbox">
          <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}"
          /></a>
        </div>
        <ul class="gallery-data-list">
          <li class="gallery-data-item">
            <h3>Likes</h3>
            <p>${likes}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Views</h3>
            <p>${views}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Comment</h3>
            <p>${comments}</p>
          </li>
          <li class="gallery-data-item">
            <h3>Downloads</h3>
            <p>${downloads}</p>
          </li>
        </ul>
      </li>
    </div>
`
    )
    .join('');
}

export function renderGallery(arr) {
  const markup = galleryTemplate(arr);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
