var textInput = document.querySelector("#Input_texto");
var outputDiv = document.getElementById("output");

function criptografar() {
    var texto = textInput.value;
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    exibirResultado(resultCripto);
}

function descriptografar() {
    var texto = textInput.value;
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    exibirResultado(resultDescripto);
}

function exibirResultado(resultado) {
    outputDiv.innerHTML = '<textarea readonly class="output-texto">' + resultado + '</textarea>' +
        '<button class="botao__copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.querySelector('.output-texto');

    textoCop.select();
    
    try {
        document.execCommand('copy');
        alert("Texto copiado.");
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
        alert("Erro ao copiar texto. Tente manualmente.");
    }

    // Desselecionar o texto após a cópia
    window.getSelection().removeAllRanges();
}