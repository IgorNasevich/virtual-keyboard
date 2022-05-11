import './scss/app.scss';

const BODY = document.querySelector("body");
let block = document.createElement("div");
block.setAttribute("id", "keyboard");
BODY.appendChild(block);


let keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// document.onkeydown = function(event){
//     console.log(event);
//     keyboardEng.push(event.key);
//     console.log(keyboardEng);
// }

function init(){
    let out = '';
    for(let i = 0; i < keyboardEng.length; i ++){
        console.log(5);
        out+='<div class ="keyboard-key">' + keyboardEng[i] + '</div>';
    }
    document.querySelector('div').innerHTML = out;
}

init();
document.querySelectorAll(".keyboard-key")[13].setAttribute("id", "backspace");
document.querySelectorAll(".keyboard-key")[14].setAttribute("id", "tab");
document.querySelectorAll(".keyboard-key")[29].setAttribute("id", "caps_lock");
document.querySelectorAll(".keyboard-key")[41].setAttribute("id", "enter");
document.querySelectorAll(".keyboard-key")[42].setAttribute("id", "left_shift");

