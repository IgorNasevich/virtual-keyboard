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

let keyboardRus = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.','↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
let keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
let arr = keyboardEng;
let flag = true;

document.addEventListener("keydown", (event)=>{
    if(event.code === "ShiftLeft"){
        if(document.querySelector('#keyboard .keyboard-key[data="controlleft"]').classList.contains('pressed')){
            localStorage.setItem('flag', !flag.toString());
        }
    }
    

    if(localStorage.getItem('flag') === true){
        arr = keyboardRus;
    }
    else{
        arr = keyboardEng;
    }
    init(arr);
}) 






function init(arr){
    let out = '';
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === 'Win'){
            out+='<div class ="keyboard-key" data = "meta">' + arr[i] + '</div>';
        }
        else if(arr[i] === 'Del'){
            out+='<div class ="keyboard-key" data = "delete">' + arr[i] + '</div>';
        }
        else if(arr[i] === '↑'){
            out+='<div class ="keyboard-key" data = "arrowup">' + arr[i] + '</div>';
        }
        else if(arr[i] === '↓'){
            out+='<div class ="keyboard-key" data = "arrowdown">' + arr[i] + '</div>';
        }
        else if(arr[i] === '→'){
            out+='<div class ="keyboard-key" data = "arrowright">' + arr[i] + '</div>';
        }
        else if(arr[i] === '←'){
            out+='<div class ="keyboard-key" data = "arrowleft">' + arr[i] + '</div>';
        } 
        else if(i === 41){
            out+='<div class ="keyboard-key" data = "shiftleft">' + arr[i] + '</div>';
        }
        else if(i === 53){
            out+='<div class ="keyboard-key" data = "shiftright">' + arr[i] + '</div>';
        }
        else if(i === 54){
            out+='<div class ="keyboard-key" data = "controlleft">' + arr[i] + '</div>';
        }
        else if(i === 56){
            out+='<div class ="keyboard-key" data = "altleft">' + arr[i] + '</div>';
        }
        else if(i === 58){
            out+='<div class ="keyboard-key" data = "altright">' + arr[i] + '</div>';
        }
        else if(i === 59){
            out+='<div class ="keyboard-key" data = "controlright">' + arr[i] + '</div>';
        }
        else{
            out+='<div class ="keyboard-key" data = "'+ arr[i].toLowerCase()+ '">' + arr[i] + '</div>';
        }   
    }
    document.querySelector('#keyboard').innerHTML = out;

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
}
init(arr);






document.onkeydown = function(event){
    if(event.code === "AltLeft"){
        document.querySelector('#keyboard .keyboard-key[data="altleft"]').classList.add('pressed');
        document.querySelector('#keyboard .keyboard-key[data="altleft"]').classList.add('animate'); 
    }
    else if(event.code === "AltRight"){
        document.querySelector('#keyboard .keyboard-key[data="altright"]').classList.add('pressed'); 
    }
    else if(event.code === "ControlLeft"){
        document.querySelector('#keyboard .keyboard-key[data="controlleft"]').classList.add('pressed'); 
    }
    else if(event.code === "ControlRight"){
        document.querySelector('#keyboard .keyboard-key[data="controlright"]').classList.add('pressed'); 
    }
     else if(event.code === "ShiftLeft"){
        document.querySelector('#keyboard .keyboard-key[data="shiftleft"]').classList.add('pressed'); 
    }
    else if(event.code === "ShiftRight"){
        document.querySelector('#keyboard .keyboard-key[data="shiftright"]').classList.add('pressed'); 
    }
    else{
        document.querySelector('#keyboard .keyboard-key[data="'+event.key.toLowerCase()+'"]').classList.add('pressed');
    }
      
}

document.onkeyup = function(event){
    if(event.code === "AltLeft"){
        document.querySelector('#keyboard .keyboard-key[data="altleft"]').classList.remove('pressed');
        document.querySelector('#keyboard .keyboard-key[data="altleft"]').classList.remove('animate'); 
    }
    else if(event.code === "AltRight"){
        document.querySelector('#keyboard .keyboard-key[data="altright"]').classList.remove('pressed'); 
    }
    else if(event.code === "ControlLeft"){
        document.querySelector('#keyboard .keyboard-key[data="controlleft"]').classList.remove('pressed'); 
    }
    else if(event.code === "ControlRight"){
        document.querySelector('#keyboard .keyboard-key[data="controlright"]').classList.remove('pressed'); 
    }
     else if(event.code === "ShiftLeft"){
        document.querySelector('#keyboard .keyboard-key[data="shiftleft"]').classList.remove('pressed'); 
    }
    else if(event.code === "ShiftRight"){
        document.querySelector('#keyboard .keyboard-key[data="shiftright"]').classList.remove('pressed'); 
    }
    else{
        document.querySelector('#keyboard .keyboard-key[data="'+event.key.toLowerCase()+'"]').classList.remove('pressed');
    }
}

// document.onkeydown = function(event){
    
//     console.log(event.code);
//     keyboardRus.push(event.key);
//     console.log(keyboardRus);
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a68e2294f2925164e4b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.02f00711d4b5763b8d0e.hot-update.js.map