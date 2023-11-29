const signUpBtn= document.getElementById('sign-up')
const signUpForm= document.querySelector('.container')
const main= document.querySelector('.main')
const navSignUp= document.querySelector('.nav-sign-up')
const signUpBtns= document.querySelectorAll('.sign-up-btn')

const toggleSignUp= function(){
    main.classList.add('hidden')
    signUpForm.classList.remove('hidden')
}

signUpBtns.forEach(a=>a.addEventListener('click',toggleSignUp))