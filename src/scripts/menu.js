// jQuery setup in Astro project
// npm install jquery, then npm install, then import $ from 'jquery';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(function () {
  $('.header__menu-hamburger').on('click', function () {
    $('.header__menu').toggleClass('expanded');
  });
});
