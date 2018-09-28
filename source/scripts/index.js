import application from './core/application';
import moduleHeader from './modules/header';
import pageHome from './pages/home';
import '../styles/style.less';

// includes

// variables

const $backToTopButton = $('#back_to_top_botton');

// application

const applicationModules = [
  // modules
  { name: 'moduleHeader', content: moduleHeader },

  // pages
  { name: 'pageHome', content: pageHome, isActive: $('.page-home').length > 0 },
];

applicationModules.forEach(({
  name,
  content,
  isActive,
}) => {
  if (isActive) {
    application.register(name, content);
  }
});


$(() => {
  application.start();
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 400) {
    $backToTopButton.fadeIn(500);
  } else {
    $backToTopButton.fadeOut(500);
  }
 });

$backToTopButton.click((event) => {
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0,
  }, 500);
 });
