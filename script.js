const button = document.querySelector('button');

const user = 'Admin';
const password = 'TheMaster';

let userInput = prompt('Login');

if (userInput == "") {
    alert('Canceled');
}   else if (userInput != user) {
    alert("I don't know you");
} else if (userInput == user) {
  let  userPassword = prompt('Password:');
    if (userPassword == password) {
        alert('Welcome!');
    } else if (userPassword != password) {
        alert('Canceled');
    } else if (userPassword == ""){
        alert('Wrong password!');
    }
}




// function greet() {
//     const time = prompt('What time is it?');
    
//     if (time < 12) {
//         alert('Good morning!')
//     } else if (time >= 12 && time <= 18){
//         alert('Good afternoon!')
//     } else {
//         alert('Good evening!')
//     }
// }

// button.addEventListener('click', greet);

// if (!age < 14 && age > 90 )