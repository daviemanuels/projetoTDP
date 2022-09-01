const menu = document.querySelector('#menu-scroll');

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 165);
}

window.addEventListener('scroll', activeScroll)