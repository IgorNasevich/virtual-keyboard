"use strict";
self["webpackHotUpdatevirtual_keyboard"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");



const BODY = document.querySelector("body");
let block = document.createElement("div");
block.setAttribute("id", "keyboard");
BODY.appendChild(block);


let keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete', 'CapsLock', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

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
let keys = document.querySelectorAll(".keyboard-key");
console.log(keys);
init();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ddc928a8855986ea9054")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.585b82dff045f3b56c2b.hot-update.js.map