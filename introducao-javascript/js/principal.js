var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true; 

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    pesoEhValido = false;
}else if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
} 
if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

console.log(imc);
