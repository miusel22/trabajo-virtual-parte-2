const button= document.querySelector('button');
var text=document.getElementById("text");
var text2="Mi primer click, ¡ole yo y la mujer que me parió!"

function cambiarTexto(){
    text.innerHTML=text2;
}

button.addEventListener("click",cambiarTexto);