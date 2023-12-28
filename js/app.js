const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', navTogo);

function navTogo() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');

    if (nav.classList.contains('open')) {
        nav.style.maxHeight = nav.scrollHeight + 'px';
    }
    else {
        nav.removeAttribute('style');
    }
}