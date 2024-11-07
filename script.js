const taxaDeCambio = {
    BRL: { USD: 0.20, EUR: 0.18 },
    USD: { BRL: 5.00, EUR: 0.90 },
    EUR: { BRL: 5.50, USD: 1.10 }
};

function converterMoeda() {
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        return;
    }

    if (moedaOrigem === moedaDestino) {
        resultado.innerText = `O valor é o mesmo: ${valor.toFixed(2)} ${moedaDestino}`;
        return;
    }

    const taxa = taxaDeCambio[moedaOrigem][moedaDestino];
    const valorConvertido = (valor * taxa).toFixed(2);

    resultado.innerText = `Valor convertido: ${valorConvertido} ${moedaDestino}`;
}
