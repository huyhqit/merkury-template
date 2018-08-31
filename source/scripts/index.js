import './../styles/style.less';

//includes

//application
window.ocApplication = require('./core/application');

const applicationModules = [
    //modules
    { name: 'moduleHeader', content: require('./modules/header') },

    //pages
    { name: 'pageHome', content: require('./pages/home'), isActive: $('.page-home').length > 0 }
];

applicationModules.forEach(({
    name,
    content,
    isActive,
}) => {
    if (isActive) {
        ocApplication.register(name, content);
    }
});


$(function () {
    ocApplication.start();
});
