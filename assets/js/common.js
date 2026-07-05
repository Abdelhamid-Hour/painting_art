// Elements Selection
const br_mode = document.querySelector('.br_mode');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const nav = document.querySelector('nav');
const ul_nav = document.querySelector('.nav_ul');
const menu_icon = document.querySelector('nav .menu_icon');

// menu animation

menu_icon.addEventListener('click', function () {
    ul_nav.classList.toggle('active');
});

document.onclick = e => {
    if(!ul_nav.contains(e.target) && !menu_icon.contains(e.target)){
        ul_nav.classList.remove('active');
    }
};

// light & dark mode
mode();
br_mode.onclick = function () {
    if (localStorage.length == 0) {
        localStorage.mode = 'light_mode';
    } else if (localStorage.mode == 'light_mode') {
        localStorage.mode = 'dark_mode';
        mode();
    } else {
        localStorage.mode = 'light_mode';
        mode();
    }
};
function mode() {
    if (localStorage.length == 0) {
        localStorage.mode = 'light_mode';
    } else if (localStorage.mode == 'light_mode') {
        document.body.style.backgroundImage = 'var(--light-mode)';
        nav.style.backgroundColor = 'var(--dark-nav)';
        dark.style.display = 'inline';
        light.style.display = 'none';
        phoneuichange();
    } else {
        document.body.style.backgroundImage = 'var(--dark-mode)';
        nav.style.backgroundColor = 'var(--light-nav)';
        dark.style.display = 'none';
        light.style.display = 'inline';
        phoneuichange();
    }
};

function phoneuichange() {
    if (window.matchMedia('(max-width: 600px)').matches) {
        ul_nav.style.backgroundColor = localStorage.mode == 'light_mode' ? '#138cb0' : '#6a6a6a';
    } else {
        ul_nav.style.backgroundColor = 'transparent';
    }
}
phoneuichange();
window.matchMedia('(max-width: 600px)').onchange = phoneuichange;