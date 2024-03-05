const hamburgerBtn = document.querySelector('#hamburger-btn');
const mobileMenuEl = document.querySelector('#mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    let hamburgerIcon = 'ri-menu-line text-2xl font-bold';
    mobileMenuEl.classList.toggle('show');
});
