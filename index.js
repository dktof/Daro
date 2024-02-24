const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");

const registerUsers = {};

registrationForm.addEventListener("submit", function (e){
    e.preventDefault();
    const username = document.getElementById("regUsername");
    const password = document.getElementById("regPassword");

    if (registerUsers.hasOwnProperty(username)){
        alert("Please choose a different username."); 
    } else {
        registerUsers[username] = password;
        alert('Registration successfull!\nUsername: ${username}\nPassword: ${password}');
        window.location.href = "./home/home.html"
    }
});