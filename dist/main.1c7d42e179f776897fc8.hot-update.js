"use strict";
self["webpackHotUpdatevirtual_keyboard"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");


document.onkeydown = function(event){
    console.log(event);
    keyboardEng.push(event.key);
    console.log(keyboardEng);
}

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


let keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];

function init(){
    let out = '';
    for(let i = 0; i < keyboardEng.length; i ++){
        console.log(5);
        out+='<div class ="keyboard-key" data = "'+ keyboardEng[i].toLowerCase()+ '">' + keyboardEng[i] + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}

init();

document.querySelectorAll(".keyboard-key")[13].setAttribute("id", "backspace");
document.querySelectorAll(".keyboard-key")[14].setAttribute("id", "tab");
document.querySelectorAll(".keyboard-key")[29].setAttribute("id", "caps_lock");
document.querySelectorAll(".keyboard-key")[41].setAttribute("id", "enter");
document.querySelectorAll(".keyboard-key")[42].setAttribute("id", "left_shift");
document.querySelectorAll(".keyboard-key")[54].setAttribute("id", "right_shift");
document.querySelectorAll(".keyboard-key")[55].setAttribute("id", "ctrl");
document.querySelectorAll(".keyboard-key")[58].setAttribute("id", "space");
document.querySelectorAll(".keyboard-key")[60].setAttribute("id", "ctrl");


// document.onkeydown = function(event){
//     document.querySelector('#keyboard .keyboard-key[data="'+event.key+'"]').classList.add('pressed');
//     console.log(event.key);
// }



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("035e172e8d12a5fc0834")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1c7d42e179f776897fc8.hot-update.js.map