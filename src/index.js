import './scss/app.scss';

const BODY = document.body;
let container = document.createElement('div');
container.classList.add("container");
BODY.appendChild(container);


let notes = document.createElement('div');
notes.innerHTML = "МЕНЯТЬ ЯЗЫК CTRL+SHIFT\n(СЛЕВА) / КЛАВИАТУРА WINDOWS";
container.appendChild(notes);
notes.classList.add("notes");
let textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.innerText = "";
container.appendChild(textarea);
let position=textarea.selectionStart;
textarea.onclick = () => {
    position = textarea.selectionStart;
  };


let block = document.createElement("div");
block.setAttribute("id", "keyboard");
container.appendChild(block);

let keyboardRus = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.','↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
let keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','↑', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'];
let keyCode = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 1600, 17, 91, 18, 32, 1800, 1700, 37, 40, 39];
let arr;

if(localStorage.getItem('language') == null){
    arr = keyboardEng; 
    localStorage.setItem('language', "eng");
}
else{
    if(localStorage.getItem('language') === "rus"){
        arr = keyboardRus;
    }
    else{
        arr = keyboardEng;
    } 
}

document.addEventListener("keydown", (event)=>{
    if(event.code === "ShiftLeft"){
        if(document.querySelector('#keyboard .keyboard-key[data="17"]').classList.contains('pressed')){
            if(localStorage.getItem('language') === "rus"){
                arr = keyboardEng;
                localStorage.setItem('language', 'eng');
            }
            else{
                arr = keyboardRus;
                localStorage.setItem('language', 'rus');
            }
            init(arr);
        }
    }
}) 



function init(arr){
    let out = '';
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] === 'Win'){
            out+='<div class ="keyboard-key" data = "91">' + arr[i] + '</div>';
        }
        else if(arr[i] === 'Del'){
            out+='<div class ="keyboard-key" data = "46">' + arr[i] + '</div>';
        }
        else if(arr[i] === '↑'){
            out+='<div class ="keyboard-key" data = "38">' + arr[i] + '</div>';//
        }
        else if(arr[i] === '↓'){
            out+='<div class ="keyboard-key" data = "40">' + arr[i] + '</div>';//
        }
        else if(arr[i] === '→'){
            out+='<div class ="keyboard-key" data = "39">' + arr[i] + '</div>';//
        }
        else if(arr[i] === '←'){
            out+='<div class ="keyboard-key" data = "37">' + arr[i] + '</div>';//
        } 
        else if(i === 41){
            out+='<div class ="keyboard-key" data = "16">' + arr[i] + '</div>';//shiftleft
        }
        else if(i === 53){
            out+='<div class ="keyboard-key" data = "1600">' + arr[i] + '</div>';//shiftright
        }
        else if(i === 54){
            out+='<div class ="keyboard-key" data = "17">' + arr[i] + '</div>'; //controlleft
        }
        else if(i === 56){
            out+='<div class ="keyboard-key" data = "18">' + arr[i] + '</div>';//altleft
        }
        else if(i === 58){
            out+='<div class ="keyboard-key" data = "1800">' + arr[i] + '</div>';//altright
        }
        else if(i === 59){
            out+='<div class ="keyboard-key" data = "1700">' + arr[i] + '</div>';//controlright
        }
        else{
            out+='<div class ="keyboard-key" data = "'+ keyCode[i]+ '">' + arr[i] + '</div>';
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



    

document.onkeydown = function(event){
    let code = "";
    
    if(localStorage.getItem('language') === "rus"){
        if(event.code === "CapsLock"){
            document.querySelector('#keyboard .keyboard-key[data="20"]').classList.toggle('pressed');
        }
        else{
            if(event.code === "AltLeft"){
                document.querySelector('#keyboard .keyboard-key[data="18"]').classList.add('pressed');
            }
            else if(event.code === "AltRight"){
                document.querySelector('#keyboard .keyboard-key[data="1800"]').classList.add('pressed'); 
            }
            else if(event.code === "ControlLeft"){
                document.querySelector('#keyboard .keyboard-key[data="17"]').classList.add('pressed'); 
            }
            else if(event.code === "ControlRight"){
                document.querySelector('#keyboard .keyboard-key[data="1700"]').classList.add('pressed'); 
            }
            else if(event.code === "ShiftLeft"){
                document.querySelector('#keyboard .keyboard-key[data="16"]').classList.add('pressed'); 
            }
            else if(event.code === "ShiftRight"){
                document.querySelector('#keyboard .keyboard-key[data="1600"]').classList.add('pressed'); 
            }
            else if(event.code === "MetaLeft"){//meta
                document.querySelector('#keyboard .keyboard-key[data="91"]').classList.add('pressed'); 
            }
            else if(event.code === "Enter"){//enter
                code = "\n";
                document.querySelector('#keyboard .keyboard-key[data="13"]').classList.add('pressed'); 
            }
            else if(event.code === "Delete"){//delete
                textarea.value = textarea.value.substring(0, position) + textarea.value.substring(position+1, textarea.value.length);
                position--;
                document.querySelector('#keyboard .keyboard-key[data="46"]').classList.add('pressed'); 
            }
            else if(event.code === "Backspace"){//backspace
                textarea.value = textarea.value.substring(0, position-1) + textarea.value.substring(position, textarea.value.length);
                position-=2;
                document.querySelector('#keyboard .keyboard-key[data="8"]').classList.add('pressed'); 
            }
            else if(event.code === "Tab"){//tab
                document.querySelector('#keyboard .keyboard-key[data="9"]').classList.add('pressed'); 
                code = "\t";
            }
            else if(event.code === "Space"){//space
                document.querySelector('#keyboard .keyboard-key[data="32"]').classList.add('pressed');
                code = " ";
            }
            else{
                let element = document.querySelector('#keyboard .keyboard-key[data="'+event.keyCode+'"]');
                element.classList.add('pressed');
                if(event.shiftKey === true && document.querySelector('#keyboard .keyboard-key[data="20"]').classList.contains('pressed')){
                    code = element.innerText.toLowerCase();
                }
                else {
                    
                    if(event.shiftKey === true || document.querySelector('#keyboard .keyboard-key[data="20"]').classList.contains('pressed')){
                        code = element.innerText;
                    }
                    else{ 
                        code = element.innerText.toLowerCase();
                    }
                }
            }
            if(!(event.code === "Backspace" || event.code === "Delete")){
                let pt1 = textarea.value.substring(0,position);
                let pt2 = textarea.value.substring(position,textarea.value.length);
                textarea.value = pt1 + code + pt2; 
            }
            position++;
        }
    }
    else {
        if(event.code === "CapsLock"){
            document.querySelector('#keyboard .keyboard-key[data="20"]').classList.toggle('pressed');
        }
        else{
            if(event.code === "AltLeft"){
                document.querySelector('#keyboard .keyboard-key[data="18"]').classList.add('pressed');
            }
            else if(event.code === "AltRight"){
                document.querySelector('#keyboard .keyboard-key[data="1800"]').classList.add('pressed'); 
            }
            else if(event.code === "ControlLeft"){
                document.querySelector('#keyboard .keyboard-key[data="17"]').classList.add('pressed'); 
            }
            else if(event.code === "ControlRight"){
                document.querySelector('#keyboard .keyboard-key[data="1700"]').classList.add('pressed'); 
            }
            else if(event.code === "ShiftLeft"){
                document.querySelector('#keyboard .keyboard-key[data="16"]').classList.add('pressed'); 
            }
            else if(event.code === "ShiftRight"){
                document.querySelector('#keyboard .keyboard-key[data="1600"]').classList.add('pressed'); 
            }
            else if(event.code === "MetaLeft"){//meta
                document.querySelector('#keyboard .keyboard-key[data="91"]').classList.add('pressed'); 
            }
            else if(event.code === "Enter"){//enter
                code = "\n";
                document.querySelector('#keyboard .keyboard-key[data="13"]').classList.add('pressed'); 
            }
            else if(event.code === "Delete"){//delete
                textarea.value = textarea.value.substring(0, position) + textarea.value.substring(position+1, textarea.value.length);
                position--;
                document.querySelector('#keyboard .keyboard-key[data="46"]').classList.add('pressed'); 
            }
            else if(event.code === "Backspace"){//backspace
                textarea.value = textarea.value.substring(0, position-1) + textarea.value.substring(position, textarea.value.length);
                position-=2;
                document.querySelector('#keyboard .keyboard-key[data="8"]').classList.add('pressed'); 
            }
            else if(event.code === "Tab"){//tab
                document.querySelector('#keyboard .keyboard-key[data="9"]').classList.add('pressed'); 
                code = "\t";
            }
            else if(event.code === "Space"){//space
                document.querySelector('#keyboard .keyboard-key[data="32"]').classList.add('pressed');
                code = " ";
            }
            else{
                let element = document.querySelector('#keyboard .keyboard-key[data="'+event.keyCode+'"]');
                element.classList.add('pressed');
                if(event.shiftKey === true && document.querySelector('#keyboard .keyboard-key[data="20"]').classList.contains('pressed')){
                    code = element.innerText.toLowerCase();
                }
                else {
                    
                    if(event.shiftKey === true || document.querySelector('#keyboard .keyboard-key[data="20"]').classList.contains('pressed')){
                        code = element.innerText;
                    }
                    else{ 
                        code = element.innerText.toLowerCase();
                    }
                }
            }
            if(!(event.code === "Backspace" || event.code === "Delete")){
                textarea.value = textarea.value.substring(0,position) + code + textarea.value.substring(position,textarea.value.length);
            }
            position++;
        }
    }

    return false;
}

document.onkeyup = function(event){
    if(event.code === "CapsLock"){
    }
    else{
        if(event.code === "AltLeft"){
            document.querySelector('#keyboard .keyboard-key[data="18"]').classList.remove('pressed');
        }
        else if(event.code === "AltRight"){
            document.querySelector('#keyboard .keyboard-key[data="1800"]').classList.remove('pressed'); 
        }
        else if(event.code === "ControlLeft"){
            document.querySelector('#keyboard .keyboard-key[data="17"]').classList.remove('pressed'); 
        }
        else if(event.code === "ControlRight"){
            document.querySelector('#keyboard .keyboard-key[data="1700"]').classList.remove('pressed'); 
        }
         else if(event.code === "ShiftLeft"){
            document.querySelector('#keyboard .keyboard-key[data="16"]').classList.remove('pressed'); 
        }
        else if(event.code === "ShiftRight"){
            document.querySelector('#keyboard .keyboard-key[data="1600"]').classList.remove('pressed'); 
        }
        else{
            document.querySelector('#keyboard .keyboard-key[data="'+event.keyCode+'"]').classList.remove('pressed');
        }
    }
   
}

document.querySelectorAll('#keyboard .keyboard-key').forEach(function(element){
    element.addEventListener('mousedown', (event)=>{
        // position = textarea.selectionStart;
        let code = "";
        if(event.currentTarget.getAttribute("data") === "20"){
            event.currentTarget.classList.toggle('pressed');
        }
        else{
            element.classList.add("pressed");
            if(event.currentTarget.getAttribute("data") === "32"){//space
                code = " ";
            }
            else if(event.currentTarget.getAttribute("data") === "18"){//altleft
           
            }
            else if(event.currentTarget.getAttribute("data") === "1800"){//altright
                
            }
            else if(event.currentTarget.getAttribute("data") === "17"){//controlleft
                
            }
            else if(event.currentTarget.getAttribute("data") === "1700"){//controlright
               
            }
            else if(event.currentTarget.getAttribute("data") === "16"){//shiftleft
                
            }
            else if(event.currentTarget.getAttribute("data") === "1600"){//shiftRight
                 
            }
            else if(event.currentTarget.getAttribute("data") === "91"){//meta
    
            }
            else if(event.currentTarget.getAttribute("data") === "13"){//enter
                code = "\n";
            }
            else if(event.currentTarget.getAttribute("data") === "46"){//delete
                textarea.value = textarea.value.substring(0, position) + textarea.value.substring(position+1, textarea.value.length);
                position--;
            }
            else if(event.currentTarget.getAttribute("data") === "8"){//backspace
                textarea.value = textarea.value.substring(0, position-1) + textarea.value.substring(position, textarea.value.length);
                position-=2;
            }
            else if(event.currentTarget.getAttribute("data") === "39"){//arrowright
                code = "→";
            }
            else if(event.currentTarget.getAttribute("data") === "37"){//arrowleft
                code = "←"
            }
            else if(event.currentTarget.getAttribute("data") === "40"){//arrowdown
                code = '↓'
            }
            else if(event.currentTarget.getAttribute("data") === "38"){//arrowup
                code = "↑"
            }
            else if(event.currentTarget.getAttribute("data") === "9"){//tab
                code = "\t";
            }
            else{
                if(event.shiftKey === true && document.querySelector('#keyboard .keyboard-key[data="20"]').classList.contains('pressed')){
                    code = element.innerText.toLowerCase();
                }
                else {
                    if(event.shiftKey === true || document.querySelector('#keyboard .keyboard-key[data="20"]').classList.contains('pressed')){
                        code = element.innerText;
                    }
                    else{ 
                        code = element.innerText.toLowerCase();
                    }
                }
            }
        }
        if(!(event.code === "Backspace" || event.code === "Delete")){
            textarea.value = textarea.value.substring(0,position) + code + textarea.value.substring(position,textarea.value.length);
        }
        position++;
    }); 
});

document.querySelectorAll('#keyboard .keyboard-key').forEach(function(element){
    element.addEventListener('mouseup', (event)=>{
        if(event.currentTarget.getAttribute("data") === "20"){
            
        }
        else{
            element.classList.remove("pressed");
        }
    }); 
});



}
init(arr);