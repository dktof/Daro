
const CodeRestriction ='esther' + 34 + 'kas';
let ageButton = document.getElementsByTagName("button")[0];

function getValue(){
    let ageInput = document.getElementsByTagName("input")[0]
    console.log(ageInput)
    return ageInput.value
};

function checkRestriction(){
    let code = getValue();

    if(code == CodeRestriction){
        
    let message = document.querySelector(".message");
    message.innerHTML = "today is bad with no \n electronics";
    alert("!thanks for entering the right code!")
        return 'hi my name is esther';
    } else {
        return 'you are underarrest for trying to\n hack in with the wrong code the police are on their way';
    }
}
function displayResult(){
    let result = checkRestriction();
    console.log(result)
    let pTag = document.getElementById("display")
    pTag.textContent = result;
}

ageButton.onclick = displayResult







//middle









function Changebackground2(){
    document.querySelector('.div').style.backgroundColor = 'pink';
}
function Changebackground3(){
    document.querySelector('.div').style.backgroundColor = 'purple';
} 

function changeColor()
{
    var l1 = document.getElementById('heading');
    var l2 = document.getElementById('label');
    l1.style.color = 'pink';
    l2.style.color = 'pink';
}
function changeColor2()
{
    var l3 = document.getElementById('heading');
    var l4 = document.getElementById('label');
    l3.style.color = 'black';
    l4.style.color = 'black';
}
