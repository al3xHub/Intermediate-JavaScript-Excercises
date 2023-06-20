//un prompt que pida el dni(cadena), almacenar en variable.
let dni=prompt("Ingrese tu dni: ");
//tomar el caracter 9 y almacenar en otra variable.
let letra=dni.charAt(8);
//Del dni tomar los primeros 8 carácteres y parsearlos a int.
let ochoCaracteres=parseInt(dni.substring(0,8));
//Si dni es menor que 0 o mayor que 99999999, mensaje de error.
if(dni<0 || dni>99999999)
{
    alert("El dni no es válido, comprueba si faltan, sobran caracteres o hay más de una letra.");
}
//Calcular letra, hacer calculo con ochoCaracteres
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C','K', 'E', 'T'];
resto=ochoCaracteres%23;
letraCorrecta=letras[resto];
//Si la letra es similar a la introducida mostramos texto de que son correctos
if(letraCorrecta==letra)
{
    alert("El número y la letra del DNI son correctos.");
}
else
{
    alert("La letra introducida no es la correcta");
}
//si no, decimos que la letra no es la correcta.
//document.write(letraCorrecta);



