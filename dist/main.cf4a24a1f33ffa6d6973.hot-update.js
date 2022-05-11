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


let keyboardEng = [];

document.onkeydown = function(event){
    console.log(event);
    keyboard.push(event.key);
    console.log(keyboardEng);
}

// function init(){
//     let out = '';
//     for(let i = 0; i < keyboardEng.length; i ++){
//         console.log(5);
//         out+='<div class ="keyboard-key">' + keyboardEng[i] + '</div>';
//     }
//     document.querySelector('div').innerHTML = out;
// }

// init();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78b34c53c5d89bbe9d98")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.cf4a24a1f33ffa6d6973.hot-update.js.map