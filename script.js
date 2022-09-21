const menu = document.querySelector('#menu-scroll');
const controls = document.querySelectorAll('.control');
const produto1 = document.querySelectorAll('.produto1');

// Menu scroll

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 165);
}

window.addEventListener('scroll', activeScroll)

// Slide 'mais vendidos'

let currentItem = 0;
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

// Slider banner

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    nextImage()
}, 4000)

function nextImage() {
    count++;
    if(count > 2) {
        count = 1
    }
    document.getElementById("radio"+count).checked = true;
}