import Swiper, { Navigation, Pagination } from 'swiper';

import {
  gallerySelector,
  galleryNextButtonSelector,
  galleryPrevButtonSelector,
  galleryPaginationSelector,
  galleryBulletSelector,
  galleryActiveBulletSelector,
  mapsSelector,
  mapsPaginationSelector,
  mapsBulletSelector,
  mapsActiveBulletSelector,
  regionsList
} from '../utils/constants.js';

// gallery slider swiper config

export const gallerySlider = new Swiper(gallerySelector, {
  direction: 'horizontal',
  loop: true,

  modules: [Navigation, Pagination],

  navigation: {
    nextEl: galleryNextButtonSelector,
    prevEl: galleryPrevButtonSelector,
  },

  pagination: {
    el: galleryPaginationSelector,
    type: 'bullets',
    bulletClass: galleryBulletSelector,
    bulletActiveClass: galleryActiveBulletSelector,
  },
});

// maps slider swiper config

export const mapsSlider = new Swiper(mapsSelector, {
  direction: 'horizontal',
  loop: false,
  allowTouchMove: false,

  modules: [Pagination],

  pagination: {
    el: mapsPaginationSelector,
    type: 'bullets',
    bulletClass: mapsBulletSelector,
    bulletActiveClass: mapsActiveBulletSelector,
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + regionsList[index] + "</span>";
    },
  },
});
