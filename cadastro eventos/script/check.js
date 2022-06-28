var i = 0;
var listaNomes = new Array();
var idade = document.getElementById("idade");
var username = document.getElementById("username");


//função que adiciona usuários no evento e mostra numa lista
function addUser(){      
    btnef = document.getElementById("btn");
    
    if (idade.value === "sim" && username.value !==""){
        listaNomes[i] = username.value;        
        alert("Usuário " + listaNomes[i] + " Cadastrado com Sucesso!");
        i++
        username.value = "";
        var e = "<hr/>";

        for (var j = 0; j < listaNomes.length; j++){
            e += "Participante " + parseInt(j+1) + ": " + listaNomes[j] + "<br/>";
        }

        document.getElementById("participantes").innerHTML = e;

    //Mensagem para caso a idade não seja compatível
    }else if (idade.value === "nao"){
        alert("Usuário não cadastrado por não ter +18 anos!");

    //Mensagem caso não tenha sido digitado um nome
    }else if (username.value == ""){
        alert("Nome inválido!");

    //Mensagem caso o número de participantes tenha sido atingido
    }else if (i >= 5){
        alert("Impossível adicionar mais participantes ao evento. Capacidade Máxima!");
    }
}
