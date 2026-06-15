function calcularProducao(){

    let hectares =
        Number(document.getElementById("hectares").value);

    let resultado =
        document.getElementById("resultadoProducao");

    if(hectares <= 0){
        resultado.innerHTML =
        "Digite uma área válida.";
        return;
    }

    let aumento = (hectares * 0.15).toFixed(1);

    resultado.innerHTML =
    `
    🌱 Área analisada: ${hectares} ha<br>
    🚜 Potencial estimado de melhoria: ${aumento}%<br>
    💧 Melhor retenção de água no solo<br>
    🌎 Menor risco de erosão
    `;
}

function calcularIndice(){

    let pontos = 0;

    if(document.getElementById("plantio").checked) pontos += 25;
    if(document.getElementById("rotacao").checked) pontos += 25;
    if(document.getElementById("cobertura").checked) pontos += 25;
    if(document.getElementById("nascentes").checked) pontos += 25;

    let nivel = "";

    if(pontos >= 75){
        nivel = "Excelente";
    }else if(pontos >= 50){
        nivel = "Bom";
    }else{
        nivel = "Precisa Melhorar";
    }

    document.getElementById("resultadoIndice").innerHTML =
    `Pontuação: ${pontos}/100<br>Nível: ${nivel}`;
}

function simularCarbono(){

    let area =
        Number(document.getElementById("areaCarbono").value);

    let carbono =
        (area * 0.5).toFixed(1);

    document.getElementById("resultadoCarbono").innerHTML =
    `
    🌎 Aproximadamente ${carbono} toneladas de carbono
    podem ser compensadas por ano.<br>
    🌱 Solo mais protegido.<br>
    💧 Melhor conservação dos recursos naturais.
    `;
}

function corrigirQuiz(){

    let resposta =
        document.querySelector('input[name="q1"]:checked');

    if(!resposta){
        document.getElementById("resultadoQuiz").innerHTML =
        "Selecione uma alternativa.";
        return;
    }

    if(resposta.value == 1){
        document.getElementById("resultadoQuiz").innerHTML =
        "🏆 Parabéns! Resposta correta.";
    }else{
        document.getElementById("resultadoQuiz").innerHTML =
        "❌ Resposta incorreta.";
    }
}
