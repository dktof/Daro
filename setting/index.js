
const CodeRestriction = 'best2345coded9485websute'.trim();
let ageButton = document.getElementsByTagName("button")[0];

function getValue(){
    let ageInput = document.getElementsByTagName("input")[0]
    console.log(ageInput)
    return ageInput.value
};

function checkRestriction(){
    let code = getValue();

    if(code == CodeRestriction){

    alert("!SYSTEM \n \t!BREACH \n SHUTDOWN INCIATED")
    window.location.href = "https://google.com";
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