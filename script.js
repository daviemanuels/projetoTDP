const menu = document.querySelector('#menu-scroll');

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 165);
}

window.addEventListener('scroll', activeScroll)

const controls = document.querySelectorAll('.control');

let currentItem = 0;

const produto1 = document.querySelectorAll('.produto1');

const maxItems = produto1.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');


        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems){
            currentItem = 0;
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        produto1.forEach(produto1 => produto1.classList.remove('current-item'));
        
        produto1[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })

        produto1[currentItem].classList.add("current-item");
    })
})