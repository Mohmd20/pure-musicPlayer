

const userInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const inputs = document.querySelectorAll('.login-input')
const sub = document.querySelector('.submit-btn')
const warning = document.querySelector('.warning')


inputs.forEach(element => {

    element.addEventListener('focus', () => {
        element.style.backgroundSize = "40px";
        element.style.paddingLeft = "40px"
    }) 
    element.addEventListener('blur', () => {
        element.style.backgroundSize = "30px";
        element.style.paddingLeft = "30px"
    })
});




 


    












