// 1.
/*var numero = prompt('Introdueix un numero: ')
if (( numero % 3 ) == 0){

	alert(numero + ' es multiplo de 3');
    
}else if ((numero % 7) == 0){

	alert(numero + ' es multiple de 7');
}

else{
    alert('El numero no es multiple de 3 ni de 7');
}
*/

// 2.
/*var x = 15
var y = 50

if (x >10 && x <= 50){
console.log('El numero X esta dins el rang')
}

if (y >10 && y <= 50){
    console.log('El numero Y esta dins el rang')
}*/

// 3.
/*var nota = 8;
switch (true){
    case nota <= 4.9:
        console.log('Suspés')
        break;
    case nota >= 5 && nota <= 5.99: 
        console.log('Suficient')
        break;
    case nota >= 6 && nota <= 6.99:
        console.log('Be')
        break;
    case nota >= 7 && nota <= 8.99:
        console.log('Notable')
        break;
    case nota >= 9:
        console.log('Excelent')
        break;
}*/
// 4.

// 5.

// 6.
/*var a;
var b;
var c;
	a=parseInt(prompt("Introdueix el primer valor: "));
	b=parseInt(prompt("Introdueix el segon valor: "));
	c=parseInt(prompt("Introdueix el tercer valor: "));
	if ( a>=b && a>=c){
        if(b>c)
        console.log(a,b,c)
    else
        console.log(a,c,b)
    }
    if(b>=a && b>=c){
        if (a>c)
        console.log(b,a,c)
    else
        console.log(b,c,a)
    }
    if(c>=a && c>=b){
        if(a>b)
        console.log(c,a,b)
    else
        console.log(c,b,a)
    }*/

// 7.
/*
var x;
var contador = 0;
    x=parseInt(prompt("Introdueix un valor: "));
    while(contador <= x){
console.log(contador)

    if(contador % 2 == 0){
        console.log(contador + " es parell")
        }
        else if(contador % 3 == 0){
        console.log(contador + " es senar")}

contador++;
    }*/

// 8.
/*
var numero = 0;
while (numero < 6){
        numero++;
        if (numero == 1){
        console.log("*");
        }
        else if (numero == 2){
        console.log("**");
        }
        else if (numero == 3){
        console.log("****");
        }
        else if (numero == 4){
        console.log("*****");
        }
        else if (numero == 5){
        console.log("******");
        }

  }
  */
// 9.
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var resultatM3 = 0;
var resultatM5 = 0;

do {
    if ((contador1 % 3 == 0) && (contador2 % 5 == 0 )){
        resultatM3 = contador1 + resultatM3;
        resultatM5 = contador2 + resultatM5;
    }
    else {
        if (contador1 % 3 == 0) {
            resultatM3 = contador1 + resultatM3;
        }
        else if (contador2 % 5 == 0 ) {
            resultatM5 = contador2 + resultatM5;
        }
    }
    contador1++;
    contador2++;
    } while (contador1 <= 1000);

console.log('Multiples de 3 sumats: ' + resultatM3);
console.log('Multiples de 5 sumats: ' + resultatM5);
