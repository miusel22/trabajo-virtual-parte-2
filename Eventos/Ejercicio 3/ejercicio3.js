var text=document.getElementById('text');
var text2="Amo los pandas"

function agregartext(){
    text.innerHTML=text2;
}
text.addEventListener("mouseover",agregartext);