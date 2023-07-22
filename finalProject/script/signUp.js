function signUp() {
    let username = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);

    let user = {
        username: username,
        password: password
    }


    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
        alert("you have registered sucsesfully! please return to log in page and try to log in");
    }
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