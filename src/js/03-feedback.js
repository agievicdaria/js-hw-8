// const formRef = document.querySelector('.feedback-form');
// const emailInputRef = document.querySelector('input[name="email"]');
// const messageInputRef = document.querySelector('textarea[name="message"]');

// const STORAGE_KEY = "feedback-form-state";

// writeValues();
// console.log(2);

// formRef.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     const data = {
//         email: emailInputRef.value,
//         message: messageInputRef.value,
//     }
//     console.log(data);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// })

// formRef.addEventListener('submit', (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     e.currentTarget.reset();
//     // const data = {
//     //     email: emailInputRef.value,
//     //     message: messageInputRef.value,
//     // }
//     // console.log(data);

//     // console.log(JSON.parse(savedInput).email);
// })

// function writeValues() {
//     console.log(555);
//     if(STORAGE_KEY) {
//         const savedInput = localStorage.getItem(STORAGE_KEY);
//         emailInputRef.value = JSON.parse(savedInput).email;
//         messageInputRef.value = JSON.parse(savedInput).message;
//         console.log(emailInputRef.value);
//         console.log(messageInputRef.value);
//     } else {
//         emailInputRef.value = 'g';
//         messageInputRef.value = 'h';
//         console.log(111);
//     }
// }

// console.log('1');