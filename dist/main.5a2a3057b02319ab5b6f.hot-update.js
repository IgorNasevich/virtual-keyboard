"use strict";
self["webpackHotUpdatevirtual_keyboard"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");




const BODY = document.body;
let container = document.createElement('div');
container.classList.add("container");
BODY.appendChild(container);

let textarea = document.createElement('textarea');
textarea.classList.add('textarea');
container.appendChild(textarea);

let block = document.createElement("div");
block.setAttribute("id", "keyboard");
container.appendChild(block);


let keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];

function init(){
    let out = '';
    for(let i = 0; i < keyboardEng.length; i ++){
        if(keyboardEng[i] === 'Ctrl'){
            out+='<div class ="keyboard-key" data = "control">' + keyboardEng[i] + '</div>';
        }
        else if(keyboardEng[i] === 'Win'){
            out+='<div class ="keyboard-key" data = "meta">' + keyboardEng[i] + '</div>';
        }
        else if(keyboardEng[i] === 'Del'){
            out+='<div class ="keyboard-key" data = "delete">' + keyboardEng[i] + '</div>';
        }
        else if(keyboardEng[i] === '↑'){
            out+='<div class ="keyboard-key" data = "arrowup">' + keyboardEng[i] + '</div>';
        }
        else if(keyboardEng[i] === '↓'){
            out+='<div class ="keyboard-key" data = "arrowdown">' + keyboardEng[i] + '</div>';
        }
        else if(keyboardEng[i] === '→'){
            out+='<div class ="keyboard-key" data = "arrowright">' + keyboardEng[i] + '</div>';
        }
        else if(keyboardEng[i] === '←'){
            out+='<div class ="keyboard-key" data = "arrowleft">' + keyboardEng[i] + '</div>';
        } 
        else{
            out+='<div class ="keyboard-key" data = "'+ keyboardEng[i].toLowerCase()+ '">' + keyboardEng[i] + '</div>';
        }   
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();



document.querySelectorAll(".keyboard-key")[13].setAttribute("id", "backspace");
document.querySelectorAll(".keyboard-key")[14].setAttribute("id", "tab");
document.querySelectorAll(".keyboard-key")[27].setAttribute("id", "del");
document.querySelectorAll(".keyboard-key")[28].setAttribute("id", "caps_lock");
document.querySelectorAll(".keyboard-key")[40].setAttribute("id", "enter");
document.querySelectorAll(".keyboard-key")[41].setAttribute("id", "left_shift");
document.querySelectorAll(".keyboard-key")[53].setAttribute("id", "right_shift");
document.querySelectorAll(".keyboard-key")[54].setAttribute("id", "ctrl");
document.querySelectorAll(".keyboard-key")[57].setAttribute("id", "space");
document.querySelectorAll(".keyboard-key")[59].setAttribute("id", "ctrl");


// document.onkeydown = function(event){
//     document.querySelector('#keyboard .keyboard-key[data="'+event.key.toLowerCase()+'"]').classList.add('pressed');  
// }

// document.onkeyup = function(event){
//     document.querySelector('#keyboard .keyboard-key[data="'+event.key.toLowerCase()+'"]').classList.remove('pressed');
// }

document.onkeydown = function(event){
    console.log(event);
    keyboardEng.push(event.key);
    console.log(keyboardEng);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("346b76a26e97a1a23e75")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5a2a3057b02319ab5b6f.hot-update.js.map