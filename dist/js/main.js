const hamburgerBtn = document.querySelector('#hamburger-btn');
const mobileMenuEl = document.querySelector('#mobile-menu');
const navLinks = document.querySelectorAll('.nav-link')
hamburgerBtn.addEventListener('click', () => {
    let hamburgerIcon = 'ri-menu-line text-2xl font-bold';
    mobileMenuEl.classList.toggle('show');

    navLinks.forEach(item => item.addEventListener('click', () => {
        mobileMenuEl.classList.contains('show') ? mobileMenuEl.classList.remove('show')
            : console.log('faslse');
    }))
});

