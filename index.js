var name = "";


function collectName(){
    name = prompt("What is your name?");
    document.getElementById('username').innerHTML = `${name}'s Calculator`;
}

collectName();


function showText(number){
    document.getElementById('screen').innerHTML += number;
}

function calculate(){
    let content = document.getElementById('screen').innerHTML;
    let answer = eval(content);
    document.getElementById('screen').innerHTML = content;
    document.getElementById('screen2').innerHTML = answer;
}

function clearContent(){
    document.getElementById('screen').innerHTML = "";
    document.getElementById('screen2').innerHTML = "";
}