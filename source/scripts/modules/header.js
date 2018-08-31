module.exports = function(sandbox){
    let _this = this;

    _this.bindEvents = () => {
        _this.objects.$menuItem1.on('click', event => {
            event.preventDefault();
        });

        _this.objects.$logo.on('click', event => {
            event.preventDefault();

            sandbox.emit('header/logo/click');
        });
    };

    return {
        init: (data = {}) => {
            _this.data = data;

            _this.objects = {
                $logo: $('#header__logo'),
                $menuItem1: $('#header__menu__item_1')
            };

            _this.bindEvents();
        },
        destroy: () => {}
    }
};
