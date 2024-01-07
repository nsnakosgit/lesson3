

const GmailConatiner = document.getElementById('gmail_container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    GmailConatiner.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    GmailConatiner.classList.remove("active");
});


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

