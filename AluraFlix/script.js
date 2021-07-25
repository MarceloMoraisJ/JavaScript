
const figure = document.createElement('figure');
const img = document.createElement('img');
const title = document.createElement('figcaption');
const listBanners = document.querySelector('.list-banners');

figure.classList.add('wrapper-banner');

img.src = 'imagens/VingadoresUltimato.jpg';
img.alt = 'banner of the movie';
img.classList.add('main-banner');
img.style.width='70px';

title.textContent = 'Vingadores Ultimato';
title.classList.add('main-caption');

figure.insertAdjacentElement('beforeend',img);
figure.insertAdjacentElement('beforeend',title);

listBanners.insertAdjacentElement('beforeend',figure);