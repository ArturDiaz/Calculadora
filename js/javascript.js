var cero= document.getElementById("0");
var uno= document.getElementById("1");
var dos= document.getElementById("2");
var tres= document.getElementById("3");
var cuatro= document.getElementById("4");
var cinco= document.getElementById("5");
var seis= document.getElementById("6");
var siete= document.getElementById("7");
var ocho= document.getElementById("8");
var nueve= document.getElementById("9");
var punto1= document.getElementById("punto");
var on1= document.getElementById("on");
var suma = document.getElementById("mas");
var resta = document.getElementById("menos");
var por = document.getElementById("por");
var dividir = document.getElementById("dividido");
var pantalla= document.getElementById("display");
var signo = document.getElementById("sign");
var igual = document.getElementById("igual");
//------------ CERO --------------
cero.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	cero.style.padding="0px";
	
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "0" ;
		}else{
			pantalla.innerHTML = "0";
		}	
	}
});
cero.addEventListener("mousedown",function(){
	cero.style.padding="1px";
});


//---------- UNO ---------------
uno.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	uno.style.padding="0px";
	
	if(num1.length < 8){
		if(num1 != "0"){
			pantalla.innerHTML += "1";
		}else{
			pantalla.innerHTML = "1";
		}
	}
});
uno.addEventListener("mousedown",function(){
	uno.style.padding="1px";
});

//------------- DOS -------------
dos.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	dos.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "2";
		}else{
			pantalla.innerHTML = "2";
		}
	}
});
dos.addEventListener("mousedown",function(){
	dos.style.padding="1px";
});

//------------ TRES -------------
tres.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	tres.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "3";
		}else{
			pantalla.innerHTML = "3";
		}
	}
});
tres.addEventListener("mousedown",function(){
	tres.style.padding="1px";
});

//---------------- CUATRO -----------------
cuatro.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	cuatro.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "4";
		}else{
			pantalla.innerHTML = "4";
		}
	}
});
cuatro.addEventListener("mousedown",function(){
	cuatro.style.padding="1px";
});

//----------- CINCO -------------------
cinco.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	cinco.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "5";
		}else{
			pantalla.innerHTML = "5";
		}
	}
});
cinco.addEventListener("mousedown",function(){
	cinco.style.padding="1px";
});

//------------- SEIS ---------------------
seis.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	seis.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "6";
		}else{
			pantalla.innerHTML = "6";
		}
	}
});
seis.addEventListener("mousedown",function(){
	seis.style.padding="1px";
});

//-------------- SIETE -------------------
siete.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	siete.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "7";
		}else{
			pantalla.innerHTML = "7";
		}
	}
});
siete.addEventListener("mousedown",function(){
	siete.style.padding="1px";
});

//----------------- OCHO ------------------
ocho.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	ocho.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "8";
		}else{
			pantalla.innerHTML = "8";
		}
	}
});
ocho.addEventListener("mousedown",function(){
	ocho.style.padding="1px";
});

//---------------- NUEVE ----------------
nueve.addEventListener("click",function(){
	var num1= document.getElementById("display").innerHTML;
	nueve.style.padding="0px";
	
	if(num1.length<8){
		if(num1 != "0"){
			pantalla.innerHTML += "9";
		}else{
			pantalla.innerHTML = "9";
		}
	}
});
nueve.addEventListener("mousedown",function(){
	nueve.style.padding="1px";
});


//--------- Limpiando -----------
on1.addEventListener("click",function(){
	pantalla.innerHTML="0";
	on1.style.padding = "0px";
});

on1.addEventListener("mousedown", function(){
	on1.style.padding ="1px";
});

//----------- +/- SIGNO ------------------
signo.addEventListener("click",function(){
	signo.style.padding ="0px";
	var num1 = document.getElementById("display").innerHTML;
	var signo11;
	
	//if(num1.length<9){
		if(num1=="0"){
			pantalla.innerHTML = num1;
		
		//si(negamos num1.buscando('-') para que sea false)
		}else if(!num1.includes('-')){//includes verifica valor booleam('el valor que se busca')
			signo11= "-";
			pantalla.innerHTML = signo11+num1;
		}else{
			signo11 = "+";
			pantalla.innerHTML = num1.replace('-','');//replace es remplazar('parametro1','remplazando')
		}
		
	//}
});
signo.addEventListener("mousedown", function(){
	signo.style.padding ="1px";
});


//---------- PUNTO ---------------

punto1.addEventListener("click",function(){
	punto1.style.padding ="0px";
	var num1 = document.getElementById("display").innerHTML;
	var n = pantalla.innerHTML.indexOf(".");//.indexOf("busca")
	
	if(num1.length<8){
		if(n != -1 ){
			return num1;
			
		}else{
			pantalla.innerHTML += ".";
		}
	}
	
});
punto1.addEventListener("mousedown",function(){
	punto1.style.padding ="1px";
});

/////////---------- VARIABLES DE OPERACIONES ---------/////////////
var numero1 = parseFloat(document.getElementById("display").innerHTML);
var numero2 = parseFloat(document.getElementById("display").innerHTML);
var operador="";


//---------SUMAR-----------
suma.addEventListener("click",function(){
	suma.style.padding ="0px";
	
	var num1 = parseFloat(document.getElementById("display").innerHTML);
	numero1 = num1;
	operador = "+";
	pantalla.innerHTML = "0";
	
});
suma.addEventListener("mousedown",function(){
	suma.style.padding ="0.5px";
});

//-----------RESTAR--------------
resta.addEventListener("click",function(){
	resta.style.padding ="0px";
	
	var num1 = parseFloat(document.getElementById("display").innerHTML);
	numero1 = num1;
	operador = "-";
	pantalla.innerHTML = "0";
	
});
resta.addEventListener("mousedown",function(){
	resta.style.padding ="0.5px";
});

//---------MULTIPLICAR-----------
por.addEventListener("click",function(){
	por.style.padding ="0px";
	
	var num1 = parseFloat(document.getElementById("display").innerHTML);
	numero1 = num1;
	operador = "*";
	pantalla.innerHTML = "0";
	
});
por.addEventListener("mousedown",function(){
	por.style.padding ="1px";
});

//---------DIVIDIR-----------
dividir.addEventListener("click",function(){
	dividir.style.padding ="0px";
	
	var num1 = parseFloat(document.getElementById("display").innerHTML);
	numero1 = num1;
	operador = "/";
	pantalla.innerHTML = "0";
	
});
dividir.addEventListener("mousedown",function(){
	dividir.style.padding ="1px";
});

//----------- IGUAL ------------
igual.addEventListener("click",function(){
	igual.style.padding ="0px";
	
	var num2 = parseFloat(document.getElementById("display").innerHTML);
	numero2 = num2;
	pantalla.innerHTML = "0";
	var resultado;
	
	if(operador == "+"){
		resultado = numero1 + numero2;
		pantalla.innerHTML = resultado;
		operador = "";
	}else if(operador == "-"){
		resultado = numero1 - numero2;
		pantalla.innerHTML = resultado;
		operador = "";
	}else if(operador == "*"){
		resultado = numero1 * numero2;
		pantalla.innerHTML = resultado;
		operador = "";
	}else if(operador == "/"){
		resultado = numero1 / numero2;
		pantalla.innerHTML = resultado;
		operador ="";
	}
	
});
igual.addEventListener("mousedown",function(){
	igual.style.padding ="1px";
});





