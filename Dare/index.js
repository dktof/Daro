/*const RESTRICTION = 16;
const RESTRICTION2 = 6;
const RESTRICTION3 = 11; 

let ageButton = document.getElementsByTagName("button")[0];

function getValue(){
    let ageInput = document.getElementsByTagName("input")[0]
    console.log(ageInput)
    return ageInput.value
};

function checkRestriction(){
    let age = getValue();
    if(age >= RESTRICTION){
        return "click enter to continue"
    } 
    else if(age < RESTRICTION){
        return checkRestriction3()
    }
    else {
        return "go and get an adult for the next stage then click continue"
    }
}

function checkRestriction3(){
    let age2 = getValue();
    if(age2 >= RESTRICTION3){
        return "go and get an adult for the next stage "
    } 
    else if(age2 < RESTRICTION3){
        return checkRestriction2()
    }
    else {
        return "you are too young"
    }
} 

function checkRestriction2(){
    let age = getValue();
    if(age >= RESTRICTION2){
        return "ayou will need a parents emil to manage your account"
    } 
    else {
        return "wrong code"
    }
}

function displayResult(){
    let result = checkRestriction();
    console.log(result)
    let pTag = document.getElementById("display")
    pTag.textContent = result;
}

ageButton.onclick = displayResult*/
const CodeRestriction = 'dami'.trim();
let ageButton = document.getElementsByTagName("button")[0];

function getValue(){
    let ageInput = document.getElementsByTagName("input")[0]
    console.log(ageInput)
    return ageInput.value
};

function checkRestriction(){
    let code = getValue();

    if(code == CodeRestriction){
        

    let input = document.getElementsByTagName("input")[0];
    let message = document.querySelector(".message");
    message.innerHTML = "hi me," + "my name is dare." ;
    alert("!welcome \n \tme!")
    return 'corect code';
    } else {
        return 'incorect code';
    }
}
function displayResult(){
    let result = checkRestriction();
    console.log(result)
    let pTag = document.getElementById("display")
    pTag.textContent = result;
}

ageButton.onclick = displayResult