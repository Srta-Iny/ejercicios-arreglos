//EJERCICIO 1;
function numMenor(q,w,e){
	var numeros=Math.min(q, w, e);// Math.min devuelve el menor de los numeros  que se le entrega
	document.getElementById("ej-uno").innerHTML = "El numero menor es el " + numeros;
}
//EJERCICIO 2;
function esParImpar(num){
	var resp
	if (num%2 === 0){// confirmando par
		resp = "es par";
	}else{
		resp = "es impar";
	}
	document.getElementById("ej-dos").innerHTML ="el numero " + resp;
}
//EJERCICIO 3;
function numOrden(x, y, z){
	var numerosOriginal = [x,y,z]; //array con los num
	document.getElementById("ej-tres").innerHTML = numerosOriginal.sort(numerosOrdenados);//muestra num ordenados
}
function numerosOrdenados(num1, num2) { //ordena de mayor a menor.
	return num1-num2;
}
//EJERCICIO 4;
function minusculasMayusculas(frase){
	var mayusculas= frase.toUpperCase();//convierte a mayuscula
	var minusculas= frase.toLowerCase();// convierte en minusculas
	var respuesta= "";
	if(frase === ""){
		respuesta= "Ingresa una frase";
	}else if(frase === mayusculas){
		respuesta= "En la frase solo hay letras mayusculas";
	} else if (frase ===  minusculas){
		respuesta= "En la frase solo hay letras minusculas";
	} else{
		respuesta= "En la frase hay letras mayusculas y minusculas";
	}
	document.getElementById("ej-cuatro").innerHTML = respuesta;
}
//EJERCICIO 5;
function palindromo(texto){
	var resp = " ";
	var original = texto.replace(/\s/g,"").replace(/[^a-zA-Z 0-9.]+/g,"").toLowerCase();// elimino caracteres especiales y espacios
	var reves = texto.replace(/\s/g,"").replace(/[^a-zA-Z 0-9.]+/g,"").toLowerCase().split("").reverse().join("");// ademas de invierte la frase
	if( original === reves){
		resp = "La frase es un palindromo";
	}else{
		resp = "La frase no es palindromo";
	}
	document.getElementById("ej-cinco").innerHTML = resp;
}
//EJERCICIO 6;
//EJERCICIO 7;
function cuadrado(x,y){
	var suma=x+y; // suma de numeros 
	var multipicacion= suma*suma; // multipicacion por si mismo
	document.getElementById("ej-siete").innerHTML = "El resultado es: " + multipicacion ;
}
//EJERCICIO 8;
function numeroPrimo(numero){
	var resp =" ";
	var noNum = isNaN(numero);
	if(noNum){ // si no ingresa un valor numerico
		resp ="Debes ingresar un numero";
	}else if (numero > 2){ // el primer numero primo es el 2
		for (var i=2; i < numero; i++){// itera empezando por 2 
			if(numero%i === 0){ // divide por todos los numeros menores a el numero
				resp= "No es un numero primo";
				break;// cuando encuentre el 0 deja de iterar
			}else{
				resp= "Si es un numero primo";
			}
		}
	}else if(numero < 2){// 0 y 1 no son n° primos
		resp= "No es un numero primo ni compuesto";
	}else{
		resp= "Si es un numero primo";// por el 2 xD		
	}
	document.getElementById("ej-ocho").innerHTML = resp;
}	
//EJERCICIO 9;

//EJERCICIO 10;
function digitos(valor){
	var cantidad=valor.replace(/\s/g,"").toString(); 
	document.getElementById("ej-diez").innerHTML = "la cantidad de digitos es: " + cantidad.length;
}