let inputs = document.getElementById('task-input');
let text = document.querySelector('.text');

function Add(){
    //console.log('Function Add() called');
   if (inputs.value == ""){
     alert('Please enter your task!');
   } else{
     let newElement = document.createElement("ul");
     newElement.innerHTML = `${inputs.value} <i class="fa-solid fa-trash-can"></i>`;
     text.appendChild(newElement);
     inputs.value= "";
     newElement.querySelector('i').addEventListener('click', remove)
     function remove(){
        newElement.remove()
     }
   }
}