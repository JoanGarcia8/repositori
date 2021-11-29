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
var a;
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
    }