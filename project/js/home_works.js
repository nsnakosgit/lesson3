
//gmail_container Функция
const GmailConatiner = document.getElementById('gmail_container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');


registerBtn.addEventListener('click', () => {
    GmailConatiner.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    GmailConatiner.classList.remove("active");
});

//input_email Функция
const inputEmail = document.querySelector('#input_email')
const inputButton = document.querySelector('#input_button')
const gmailResult = document.querySelector('#gmail_result1')

const regExp = /^[A-Za-z][A-Za-z0-9]+@gmail.com$/;

inputButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (regExp.test(inputEmail.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'blue'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
});

//input_email1 Функция2
const inputEmail1 = document.querySelector('#input_email1')
const inputButton1 = document.querySelector('#input_button1')
const gmailResult1 = document.querySelector('#gmail_result')



inputButton1.addEventListener('click', (event) => {
    event.preventDefault();

    if (regExp.test(inputEmail1.value)){
        gmailResult1.innerHTML = 'OK'
        gmailResult1.style.color = 'blue'
    }else {
        gmailResult1.innerHTML = 'NOT OK'
        gmailResult1.style.color = 'red'
    }
});

//move_inner_blok Функция
let x = 0;
let y = 0;
let xDirection = 1;
let yDirection = 1;

function animateSmallBlock() {
    const move_content = document.querySelector('.move_content');
    const move_inner_blok = document.querySelector('.move_inner_blok');
    
    if (x + move_content.clientWidth >= move_inner_blok.clientWidth) {
        xDirection = -1;
    }
    if (y + move_content.clientHeight >= move_inner_blok.clientHeight) {
        yDirection = -1;
    }
    if (x <= 0) {
        xDirection = 1;
    }
    if (y <= 0) {
        yDirection = 1;
    }
    x += 1 * xDirection;
    y += 1 * yDirection;
    move_content.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animateSmallBlock);
}

animateSmallBlock();




//homework2 Функция

let seconds = 0;
let interval ;

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const secondsDisplay = document.getElementById('seconds');



start.addEventListener('click', () => {
    clearInterval(interval); 
    interval = setInterval(() => {
        seconds++;
        secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    secondsDisplay.textContent = '00';
});

