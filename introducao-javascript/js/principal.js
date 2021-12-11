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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

/* 
//função anonima 
titulo.addEventListener("click", function (){
    console.log("Olá eu fui clicado !")
});

//função nomeada
function mostraMensagem(){
    console.log("Olá eu fui clicado !")
}
*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
//add paciente 
botaoAdicionar.addEventListener("click", function (event) {
    //segurar ação padrão
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});