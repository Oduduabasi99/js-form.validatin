const form = document.getElementById('form');
const username = document.getElementById('username');;
const email = document.getElementById('email')
const password = document.getElementById('password')
const cPassword = document.getElementById('passwordC')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
    if (emailValue === "") {
        setErrorFor(email, 'Email cannot be blink');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === "") {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password, '');
    }
    if (cPasswordValue === "") {
        setErrorFor(cPassword, 'Password cannot be blank');
    } else if (passwordValue !== cPasswordValue) {
        setErrorFor(cPassword, 'Passwords does not match');

    } else {
        setSuccessFor(cPassword, '');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const msg = formControl.querySelector('p');
    msg.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}