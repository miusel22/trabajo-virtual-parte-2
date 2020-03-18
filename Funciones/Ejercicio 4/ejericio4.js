function calcularModelo(tipocaja,width,padding,border)
{
if(tipocaja==='content-box'){
    console.log(`El ancho del contenido es: ${width}px`);
}
else{

console.log(`El ancho del total de la caja es: ${width+padding+border}`);
}
}
calcularModelo(true,200,200,200)