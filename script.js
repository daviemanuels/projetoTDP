const menu = document.querySelector('#menu-scroll');
const controls = document.querySelectorAll('.control');
const produto1 = document.querySelectorAll('.produto1');
const form = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

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

// Carrossel de Jogos

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

// Validação do formulário

function nameValidate() {
    if(campos[0].value.length < 4) {
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    campos[index].style.padding = '7px'
    campos[index].style.borderRadius = '7px'
    spans[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = '';
    campos[index].style.padding = '0'
    campos[index].style.borderRadius = '0'
    spans[index].style.display = 'none'
}
  