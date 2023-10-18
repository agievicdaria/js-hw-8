const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('input[name="email"]');
const messageInputRef = document.querySelector('textarea[name="message"]');

const STORAGE_KEY_FORM = "feedback-form-state";

writeValues();

formRef.addEventListener('input', throttle((e) => {
    const data = {
        email: emailInputRef.value,
        message: messageInputRef.value,
    }

    localStorage.setItem(STORAGE_KEY_FORM, JSON.stringify(data));
}, 1000))

formRef.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.clear();
    
    const data = {
        email: emailInputRef.value,
        message: messageInputRef.value,
    }
    console.log(data);

    e.currentTarget.reset();
})

function writeValues() {
    const savedValue = localStorage.getItem(STORAGE_KEY_FORM);
    if(savedValue) {
        emailInputRef.value = JSON.parse(savedValue).email;
        messageInputRef.value = JSON.parse(savedValue).message;
    } 
}