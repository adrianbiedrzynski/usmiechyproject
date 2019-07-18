const button = document.querySelector('.site_header-navbar');

button.addEventListener('click', () => {
    const navigation = document.querySelector('.site_header-navigation');
    navigation.classList.toggle('site_header-navigation-active');
    const bar = document.querySelector('.site_header-navbar');
    bar.classList.toggle('site_header-navbar-active')
})