const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function logIn() {
    let username = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    let userExists = false;

    let loginForm = document.querySelector('form');

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].username === username && usersData[user].password === password) {
            let sessionToken = generateString(36);
            sessionStorage.setItem('sessionToken', sessionToken);
            usersData[user].sessionToken = sessionToken;
            userExists = true;
        }
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    if (userExists === false) {
        alert("Your email or password is incorrect.")
    } else {
        window.location.href = '/finalProject/html/home.html';
    }

    localStorage.setItem('usersData', JSON.stringify(usersData));
}

// validators

function emailValidator() {
    let form = document.getElementById("form");
    let email = document.getElementById("emailInput").value;
    let emailValidationText = document.getElementById("emailValidationText");
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        emailValidationText.innerHTML = "your email is valid"
        emailValidationText.style.color = "#4F7942"
    } else {
        form.classList.remove("valid")
        form.classList.add("invalid")        
        emailValidationText.innerHTML = "please enter a valid email"
        emailValidationText.style.color = "#C70039"
    }
}

function passwordChecker() {
    let form = document.getElementById("form");
    let password = document.getElementById("passwordInput").value;
    let emailValidationText = document.getElementById("passwordValidatonText");
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;

    if (password.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        emailValidationText.innerHTML = "password is strong"
        emailValidationText.style.color = "#4F7942"
    } else {
        form.classList.remove("valid")
        form.classList.add("invalid")        
        emailValidationText.innerHTML = "please enter a strong password"
        emailValidationText.style.color = "#C70039"
    }
}