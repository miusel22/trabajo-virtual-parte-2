

function totales(num1){
    const  iva=(num1*0.21);
    const total=num1+iva;
    const result=`Precio sin IVA: ${num1}, IVA: ${iva} y Total: ${total}`;

    return result;
}

console.log(totales(20));

