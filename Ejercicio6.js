//hacer tabla de 12 datos con 0 como valor inicial
let apariciones = new Array(11).fill(0);
//obtener 3600 veces las sumas de dos numeros aleatorios
for (let i = 0; i < 36000; i++) 
{
    let dado1=Math.floor(Math.random()*6)+1;
    let dado2=Math.floor(Math.random()*6)+1;
    suma=dado1+dado2;
    
    apariciones[suma-2]++;   
}
for (let i = 2; i <=12; i++)
{ 
    document.write("<p>La suma "+i+" ha aparecido "+apariciones[i-2]+"veces</p>");
}


