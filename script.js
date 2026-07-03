let rLine = document.querySelector(".reviews-line");

let arrayRight = document.getElementById("right");
let arrayLeft = document.getElementById("left");

let position = 0;

let step = 330;

let media768 = window.matchMedia('(max-width: 768px)');

function move() {
    if (media768) {
        step = 470;
    }

    rLine.style.transform = 'translateX(-' + (position * step) + 'px)';

    arrayRight.style.opacity = (position === 2) ? "0.7" : "1";

    arrayLeft.style.opacity = (position === 0) ? "0.7" : "1";




}

arrayRight.onclick = function() {
    if (position < 2) {
        position += 1;
        move();
    }
};

arrayLeft.onclick = function() {
    if (position > 0) {
        position -= 1;
        move();
    }
};




move();


function submitEmail() {
    let userEmail = document.getElementById("input-help");

    if (userEmail.value === "") {
            alert("Пожалуйста, введите почту!");
    }
    else if (userEmail.validity.valid) {
        alert("Мы получили ваш email, cкоро с вами свяжутся!")
    }
    else {
        alert("Пожалуйста, введите корректную почту!");
    }




}