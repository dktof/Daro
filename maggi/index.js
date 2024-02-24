const CodeRestriction = 'mum ' + 92 + ' kas';
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
    message.innerHTML ='date:4/sep/23\nToday is a good day';
    alert("!welcome \n \tme!")
    return 'corect code'
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