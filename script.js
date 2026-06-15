function calcularComposto() {

    let residuos =
        parseFloat(document.getElementById("residuos").value);

    let resultado =
        document.getElementById("resultado");

    if (isNaN(residuos) || residuos <= 0) {

        resultado.innerHTML =
            "Digite uma quantidade válida.";

        return;
    }

    // Estimativa simples:
    // Cerca de 50% do material vira composto.

    let composto = residuos * 0.5;

    resultado.innerHTML =
        `Com ${residuos} kg de resíduos orgânicos é possível produzir aproximadamente ${composto.toFixed(1)} kg de composto orgânico.`;
}
