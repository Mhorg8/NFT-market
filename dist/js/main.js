const hamburgerBtn = document.querySelector('#hamburger-btn');
const mobileMenuEl = document.querySelector('#mobile-menu');
const navLinks = document.querySelectorAll('.nav-link')
hamburgerBtn.addEventListener('click', () => {
    let hamburgerIcon = 'ri-menu-line text-2xl font-bold';
    mobileMenuEl.classList.toggle('show');

    navLinks.forEach(item => item.addEventListener('click', () => {
        mobileMenuEl.classList.contains('show') ? mobileMenuEl.classList.remove('show')
            : console.log('faslse');
    }))
});

// valiation 


const userEmailInput = document.querySelector('#email-input')
const userPasswordInput = document.querySelector('#password-input')
const sumbitBtn = document.querySelector('#submit-btn')
const loginForm = document.querySelector('#login-from').addEventListener('click', (e) => e.preventDefault())



const users = [];
let isLogin = false;
// add event click to submit btn 
sumbitBtn.addEventListener('click', () => {
    // get users info
    let currentUserPass = userPasswordInput.value;
    let currentUserEmail = userEmailInput.value;

    const usersObj = {};

    // send info to the vailations functions
    if (validationEmail(currentUserEmail)
        && validationPassword(currentUserPass)) {
        isLogin = true
        // here information are true so i will push them into arrays
        usersObj.email = currentUserEmail;
        usersObj.pass = currentUserPass;

        users.push(usersObj);

        // set infos into localStorage
        setInLocal(users);

        // here  we clear the input fields after adding a new user
        userEmailInput.value = '';
        userPasswordInput.value = '';
        // change window location
        window.location.href = 'index.html';

        if (isLogin) {
            document.querySelector('#login-btn').innerHTML = 'Profile'
        }

    } else {
        alert('Wrong  email or password please try again!')
    }
})

// set in local storage
function setInLocal(users) {
    localStorage.setItem("user", JSON.stringify(users))
}

// this is for validation email
function validationEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // cheack if email are not empty 
    if (email) {
        // cheack format of email use regex
        if (emailRegex.test(email)) {
            return true
        } else {
            alert("Please enter a valid email address.")
            return false
        }
    } else {
        alert('Filds can\'t be empty')
    }
}


// in here we well validation of  the password

function validationPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    // here we well check password should not empty
    if (password) {
        // here we test the password on regex with test method
        if (passwordRegex.test(password)) {
            return true;
        } else {
            alert("Please enter a valid Password.");
            return false;
        }
    } else {
        alert('Filds can\'t be empty');
    }
}

