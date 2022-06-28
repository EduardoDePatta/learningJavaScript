//Script que pergunta o dia do evento ao usuário e faz ajustes no HTML

do{
    var diaEventoTxt = prompt("Para fins de exercício, digite o dia do evento no formato MM-DD-AAAA (com hífen): ");
    var diaEventoFormat = new Date(diaEventoTxt);
}while (diaEventoFormat == "Invalid Date" || diaEventoTxt === null);

var dataAtual = new Date();

var meses = ["janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

var dia = diaEventoFormat.getDate();
var mes = meses[diaEventoFormat.getMonth()];
var ano = diaEventoFormat.getFullYear();

var diaEvento = dia + " de " + mes + " de " + ano;

if (diaEventoFormat > dataAtual){
    var modTxt = document.getElementById("diaEscolhido");
    modTxt.innerHTML = "Próximo evento " + diaEvento;
}else{
    var mCtoHide = document.getElementById("modToHide");
    var displayDiv = document.getElementById("modToDisplay")
    mCtoHide.style.display = "none";
    displayDiv.style.display = "block";
}
