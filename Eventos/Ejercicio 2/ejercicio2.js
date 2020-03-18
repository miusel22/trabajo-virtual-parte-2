const button=document.getElementById('button');
var text=document.getElementById('text');


function Saludar(){

console.log('hola '+ text.value);
}
button.addEventListener("click",Saludar);
