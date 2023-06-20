//Leer cadena de texto con prompt
palabra=prompt("Escribe una palabra: ");
//crear la funcion
function palindromo(param)
{
//quitar espacio y ponerlo todo en minúsculas.
param=param.replace(/[\W_]/g, "").toLowerCase();
let revertido=param.split("").reverse().join("");
return param==revertido;
}
if(palindromo(palabra))
{
    alert("Es un palíndromo")
}
else
{
    alert("No es un palíndromo")
}
palindromo(palabra);
