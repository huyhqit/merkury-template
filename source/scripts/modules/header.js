module.exports = function (sandbox) {
  const _this = this;

  _this.bindEvents = () => {
    _this.objects.$menuItem1.on('click', (event) => {
      event.preventDefault();
    });

    _this.objects.$logo.on('click', (event) => {
      event.preventDefault();

      sandbox.emit('header/logo/click');
    });
  };

  return {
    init: (data = {}) => {
      _this.data = data;

      _this.objects = {
        $logo: $('#header__logo'),
        $menuItem1: $('#header__menu__item_1'),
      };

      _this.bindEvents();
    },
    destroy: () => {},
  };
};

const $openSidebarOverlayButton = $('#header_menu_bar_2__sidebar_overlay');
const $headerResponsiveMenu = document.getElementById('header__responsive_menu')
const $headerResponsiveMenuCloseButton = $('#header__responsive_menu__close_button');



$openSidebarOverlayButton.on('click', function(event) {
  event.preventDefault();
  $headerResponsiveMenu.style.width = "250px";
})

$headerResponsiveMenuCloseButton.on('click', function(event) {
  $headerResponsiveMenu.style.width = '0';
})
