var titulo = document.querySelector(".titulo")

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {

    var tdPeso = paciente[i].querySelector(".info-peso");
    var tdAltura = paciente[i].querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente[i].querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "peso inválido";
        paciente[i].classList.add("paciente-invalido");

    } else if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválido";
        paciente[i].classList.add("paciente-invalido");
    }
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}