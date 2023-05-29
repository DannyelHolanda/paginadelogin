const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordImput = document.querySelector('.password');
const loginTitle = document.querySelector('.loginTitle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');


btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passwordImput.focus(), 500);
    loginTitle.innerHTML = 'Bem Vindo';
    userEmail.innerHTML = emailInput.value;
};

btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTitle.innerHTML = 'Login'
    userEmail.innerHTML = 'Por favor, faça o Login para usar a plataforma';
    emailInput.focus();
};

checkboxPass.onclick = () => {
    if(checkboxPass.checked) {
        passwordImput.type = 'text'
    }
    else {passwordImput.type = 'password'}
};