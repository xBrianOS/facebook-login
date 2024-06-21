'use strict'

// DOM Elements
const usrEmail = document.getElementById('email');
const usrPassword = document.getElementById('password');  
const submitBtn = document.getElementById('submit');
const errorEmailMsg = document.querySelector('.email-error');
const errorPasswordMsg = document.querySelector('.password-error');

// regular expressions
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// conditionals variables
let maxCharacters = 8;

submitBtn.addEventListener('keyup', () => {
  if(!emailRegex.test(usrEmail.value)) {
    errorEmailMsg.classList.remove('hidden');
    return false;

  } if (!passwordRegex.test(usrPassword.value) && usrPassword.value === ""){
    errorPasswordMsg.classList.remove('hidden');
    return false;
  }
})
