var resultado = document.getElementById("display");
resultado.innerHTML+="";

	//Evento click OTRA FORMA
/*
//-------------boton numero 1--------------------
document.getElementById("1").addEventListener("click",evento1);
function evento1(numeroA){
	numeroA = "1";
	resultado.innerHTML += numeroA;
	document.getElementById("1").style.padding="2px";
}

document.getElementById("1").addEventListener("mouseout",eventoRetorno1);
function eventoRetorno1(){
	document.getElementById("1").style.padding="0px";
}

document.getElementById("1").addEventListener("mouseover",eventoRetorno11);
function eventoRetorno11(){
	document.getElementById("1").style.padding="1px";
}

//------------boton numero2----------------------
document.getElementById("2").addEventListener("click",evento2);
function evento2(numeroA){
	numeroA = "2";
	resultado.innerHTML += numeroA;
	document.getElementById("2").style.padding="2px";
}

document.getElementById("2").addEventListener("mouseout",eventoRetorno2);
function eventoRetorno2(){
	document.getElementById("2").style.padding="0px";
}

document.getElementById("2").addEventListener("mouseover",eventoRetorno22);
function eventoRetorno22(){
	document.getElementById("2").style.padding="1px";
}

//------------boton numero3----------------------
document.getElementById("3").addEventListener("click",evento3);
function evento3(numeroA){
	numeroA = "3";
	resultado.innerHTML += numeroA;
	document.getElementById("3").style.padding="1px";
}

document.getElementById("3").addEventListener("mouseout",eventoRetorno3);
function eventoRetorno3(){
	document.getElementById("3").style.padding="0px";
}

document.getElementById("3").addEventListener("mouseover",eventoRetorno33);
function eventoRetorno33(){
	document.getElementById("3").style.padding="1px";
}


//------------boton numero4----------------------
document.getElementById("4").addEventListener("click",evento4);
function evento4(numeroA){
	numeroA = "4";
	resultado.innerHTML += numeroA;
	document.getElementById("4").style.padding="1px";
}

document.getElementById("4").addEventListener("mouseout",eventoRetorno4);
function eventoRetorno4(){
	document.getElementById("4").style.padding="0px";
}

document.getElementById("4").addEventListener("mouseover",eventoRetorno44);
function eventoRetorno44(){
	document.getElementById("4").style.padding="1px";
}

//------------boton numero5----------------------
document.getElementById("5").addEventListener("click",evento5);
function evento5(numeroA){
	numeroA = "5";
	resultado.innerHTML += numeroA;
	document.getElementById("5").style.padding="1px";
}

document.getElementById("5").addEventListener("mouseout",eventoRetorno5);
function eventoRetorno5(){
	document.getElementById("5").style.padding="0px";
}

document.getElementById("5").addEventListener("mouseover",eventoRetorno55);
function eventoRetorno55(){
	document.getElementById("5").style.padding="1px";
}


//------------boton numero6----------------------
document.getElementById("6").addEventListener("click",evento6);
function evento6(numeroA){
	numeroA = "6";
	resultado.innerHTML += numeroA;
	document.getElementById("6").style.padding="1px";
}

document.getElementById("6").addEventListener("mouseout",eventoRetorno6);
function eventoRetorno6(){
	document.getElementById("6").style.padding="0px";
}

document.getElementById("6").addEventListener("mouseover",eventoRetorno66);
function eventoRetorno66(){
	document.getElementById("6").style.padding="1px";
}


//------------boton numero7----------------------
document.getElementById("7").addEventListener("click",evento7);
function evento7(numeroA){
	numeroA = "7";
	resultado.innerHTML += numeroA;
	document.getElementById("7").style.padding="1px";
}

document.getElementById("7").addEventListener("mouseout",eventoRetorno7);
function eventoRetorno7(){
	document.getElementById("7").style.padding="0px";
}

document.getElementById("7").addEventListener("mouseover",eventoRetorno77);
function eventoRetorno77(){
	document.getElementById("7").style.padding="1px";
}


//------------boton numero8----------------------
document.getElementById("8").addEventListener("click",evento8);
function evento8(numeroA){
	numeroA = "8";
	resultado.innerHTML += numeroA;
	document.getElementById("8").style.padding="1px";
}

document.getElementById("8").addEventListener("mouseout",eventoRetorno8);
function eventoRetorno8(){
	document.getElementById("8").style.padding="0px";
}

document.getElementById("8").addEventListener("mouseover",eventoRetorno88);
function eventoRetorno88(){
	document.getElementById("8").style.padding="1px";
}


//------------boton numero9----------------------
document.getElementById("9").addEventListener("click",evento9);
function evento9(numeroA){
	numeroA = "9";
	resultado.innerHTML += numeroA;
	document.getElementById("9").style.padding="1px";
}

document.getElementById("9").addEventListener("mouseout",eventoRetorno9);
function eventoRetorno9(){
	document.getElementById("9").style.padding="0px";
}

document.getElementById("9").addEventListener("mouseover",eventoRetorno99);
function eventoRetorno99(){
	document.getElementById("9").style.padding="1px";
}


//------------boton numero0----------------------
document.getElementById("0").addEventListener("click",evento0);
function evento0(numeroA){
	numeroA = "0";
	resultado.innerHTML += numeroA;
	document.getElementById("0").style.padding="1px";
}

document.getElementById("0").addEventListener("mouseout",eventoRetorno0);
function eventoRetorno0(){
	document.getElementById("0").style.padding="0px";
}

document.getElementById("0").addEventListener("mouseover",eventoRetorno00);
function eventoRetorno00(){
	document.getElementById("0").style.padding="1px";
}

//------------boton punto----------------------
document.getElementById("punto").addEventListener("click",eventoPunto);
function eventoPunto(numeroA){
	numeroA = ".";
	resultado.innerHTML += numeroA;
	document.getElementById("punto").style.padding="1px";
}

document.getElementById("punto").addEventListener("mouseout",eventoRetornoPunto);
function eventoRetornoPunto(){
	document.getElementById("punto").style.padding="0px";
}

document.getElementById("punto").addEventListener("mouseover",eventoRetornoPunto2);
function eventoRetornoPunto2(){
	document.getElementById("punto").style.padding="1px";
}


//------------boton suma----------------------
document.getElementById("mas").addEventListener("click",eventoMas);
function eventoMas(numeroA){
	numeroA = ".";
	resultado.innerHTML += numeroA;
	document.getElementById("mas").style.padding="1px";
}

document.getElementById("mas").addEventListener("mouseout",eventoRetornoMas);
function eventoRetornoMas(){
	document.getElementById("mas").style.padding="0px";
}

document.getElementById("mas").addEventListener("mouseover",eventoRetornoMas2);
function eventoRetornoMas2(){
	document.getElementById("mas").style.padding="0.15px";
	//document.getElementById("mas").style.paddingBottom="0.5px";
}


//------------boton resta----------------------
document.getElementById("menos").addEventListener("click",eventoMenos);
function eventoMenos(numeroA){
	//numeroA = ".";
	//resultado.innerHTML += numeroA;
	document.getElementById("menos").style.padding="1px";
}

document.getElementById("menos").addEventListener("mouseout",eventoRetornoMenos);
function eventoRetornoMenos(){
	document.getElementById("menos").style.padding="0px";
}

document.getElementById("menos").addEventListener("mouseover",eventoRetornoMenos2);
function eventoRetornoMenos2(){
	document.getElementById("menos").style.padding="1px";
}


//------------boton multiplicacion----------------------
document.getElementById("menos").addEventListener("click",eventoMenos);
function eventoMenos(numeroA){
	//numeroA = ".";
	//resultado.innerHTML += numeroA;
	document.getElementById("menos").style.padding="1px";
}

document.getElementById("menos").addEventListener("mouseout",eventoRetornoMenos);
function eventoRetornoMenos(){
	document.getElementById("menos").style.padding="0px";
}

document.getElementById("menos").addEventListener("mouseover",eventoRetornoMenos2);
function eventoRetornoMenos2(){
	document.getElementById("menos").style.padding="1px";
}


//------------boton division----------------------

//------------boton igual----------------------
*/


/* OTRA FORMA CON LOS BOTONES
	document.getElementById("mas").addEventListener("click",eventoSuma);
	function eventoSuma(num1, num2){
		num1 += resultado;
		resultado.innerHTML="";
		num2 += resultado;
		igual = num1 + num2
		resultado.innerHTML=igual;
	}
	*/
	function eventoUno(){
		resultado.innerHTML += "1";
		document.getElementById("1").style.padding="0px";
	}
	function eventoOnmousedown1(){
		document.getElementById("1").style.padding="1px";
	}
//---------------------------
	function eventoDos(){
		resultado.innerHTML += "2";
		document.getElementById("2").style.padding="0px";
	}
	function eventoOnmousedown2(){
		document.getElementById("2").style.padding="1px";
	}
//-------------------------
	function eventoTres(){
		resultado.innerHTML += "3";
		document.getElementById("3").style.padding="0px";
	}
	function eventoOnmousedown3(){
		document.getElementById("3").style.padding="1px";
	}
//-----------------------
	function eventoCuatro(){
		resultado.innerHTML += "4";
		document.getElementById("4").style.padding="0px";
	}
	function eventoOnmousedown4(){
		document.getElementById("4").style.padding="1px";
	}
//----------------------
	function eventoCinco(){
		resultado.innerHTML += "5";
		document.getElementById("5").style.padding="0px";
	}
	function eventoOnmousedown5(){
		document.getElementById("5").style.padding="1px";
	}
//----------------------
	function eventoSeis(){
		resultado.innerHTML += "6";
		document.getElementById("6").style.padding="0px";
	}
	function eventoOnmousedown6(){
		document.getElementById("6").style.padding="1px";
	}
//---------------------
	function eventoSiete(){
		resultado.innerHTML += "7";
		document.getElementById("7").style.padding="0px";
	}
	function eventoOnmousedown7(){
		document.getElementById("7").style.padding="1px";
	}
//--------------------
	function eventoOcho(){
		resultado.innerHTML += "8";
		document.getElementById("8").style.padding="0px";
	}
	function eventoOnmousedown8(){
		document.getElementById("8").style.padding="1px";
	}
//---------------------
	function eventoNueve(){
		resultado.innerHTML += "9";
		document.getElementById("9").style.padding="0px";
	}
	function eventoOnmousedown9(){
		document.getElementById("9").style.padding="1px";
	}
//---------------------
	function eventoCero(){
		resultado.innerHTML += "0";
		document.getElementById("0").style.padding="0px";
	}
	function eventoOnmousedown0(){
		document.getElementById("0").style.padding="1px";
	}

//-----------------------
	document.getElementById("1").onclick = eventoUno;
	document.getElementById("1").onmousedown = eventoOnmousedown1;

	document.getElementById("2").onclick = eventoDos;
	document.getElementById("2").onmousedown = eventoOnmousedown2;

	document.getElementById("3").onclick = eventoTres;
	document.getElementById("3").onmousedown = eventoOnmousedown3;

	document.getElementById("4").onclick = eventoCuatro;
	document.getElementById("4").onmousedown = eventoOnmousedown4;

	document.getElementById("5").onclick = eventoCinco;
	document.getElementById("5").onmousedown = eventoOnmousedown5;

	document.getElementById("6").onclick = eventoSeis;
	document.getElementById("6").onmousedown = eventoOnmousedown6;

	document.getElementById("7").onclick = eventoSiete;
	document.getElementById("7").onmousedown = eventoOnmousedown7;

	document.getElementById("8").onclick = eventoOcho;
	document.getElementById("8").onmousedown = eventoOnmousedown8;

	document.getElementById("9").onclick = eventoNueve;
	document.getElementById("9").onmousedown = eventoOnmousedown9;

	document.getElementById("0").onclick = eventoCero;
	document.getElementById("0").onmousedown = eventoOnmousedown0;


function limpiar(){
	resultado.textContent = "";
}
/*nro1.onclick = function(){
	resultado.textContent += "1";
}
*/




/*//var resultado= document.getElementById('display');
var on = document.getElementById('on');
var sing = document.getElementById('sing');
var raiz = document.getElementById('raiz');
var dividido = document.getElementById('dividido');
var por = document.getElementById('por');
var menos = document.getElementById('menos');
var mas = document.getElementById('mas');
var punto = document.getElementById('punto');

*/




/*2 - Desarrolla la funcionalidad de la calculadora
utilizando el patrón módulo, es decir que todo
el código debe estar englobado en un objeto llamado Calculadora.
Utiliza un método de inicialización que se encargue de ejecutar
todas las otras funciones que se deben iniciar con la ejecución del programa.
*/
var calculadora = (function(num1, num2){
  var resultado = 0
  function actualizarResultado(nuevoResultado){
    resultado = nuevoResultado
  }

  return{
    sumar: function(){
      var resultado = num1 + num2
      actualizarResultado(resultado)
    },
    restar: function(){
      var resultado = num1 - num2
      actualizarResultado(resultado)
    },
    multiplicar: function(){
      var resultado = num1 * num2
      actualizarResultado(resultado)
    },
    dividir: function(){
      var resultado = num1 / num2
      actualizarResultado(resultado)
    },
    resultado: function(){
      return resultado
    }
  }
})



//mostrarResultado.addEventListener('click', MensajeA)



/*Crea los métodos que consideres necesarios para hacer
que la tecla presionada reduzca su tamaño y vuelva a su
forma original al soltarla.
*/
//   var teclado = document.getElementsByClassName("tecla");
/*



function EventoMouse(){
  document.getElementById("on").style="width:20%";
  document.getElementById("sign").style="width:20%";
  document.getElementById("raiz").style="width:20%";
  document.getElementById("dividido").style="width:20%";
  document.getElementById("7").style="width:20%";
}
var boton1;
boton1.addEventListener("click",function(){
  document.getElementById("on").onmouseup = EventoMouse;
})
document.getElementById("on").onmousedown = EventoMouse;

document.getElementById("sign").onmouseup = EventoMouse;
document.getElementById("raiz").onmouseup = EventoMouse;
document.getElementById("dividido").onmouseup = EventoMouse;


document.getElementById("sign").onmousedown = EventoMouse;
document.getElementById("raiz").onmousedown = EventoMouse;
document.getElementById("dividido").onmousedown = EventoMouse;
*/