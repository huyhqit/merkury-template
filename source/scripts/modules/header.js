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

$('#open_sidebar_overlay_button').on('click', function(event) {
  event.preventDefault();
  document.getElementById("header__responsive_menu").style.width = "250px";
})

$('#header__responsive_menu__close_button').on('click', function(event) {
  document.getElementById("header__responsive_menu").style.width = '0';
})
