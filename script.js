function inserirNumeros() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Digite um número válido para a quantidade.");
        return;
    }

    let numeros = [];

    for (let i = 0; i < quantidade; i++) {
        let valor = parseInt(prompt(`Digite o número ${i + 1}:`));
        while (isNaN(valor)) {
            valor = parseInt(prompt(`Entrada inválida! Digite novamente o número ${i + 1}:`));
        }
        numeros.push(valor);
    }

 
    ordenarArray(numeros);

    document.getElementById("resultado").innerHTML = `
        <p><strong>Array antes da ordenação:</strong> [${antesOrdenacao.join(", ")}]</p>
        <p><strong>Array após a ordenação:</strong> [${numeros.join(", ")}]</p>
    `;
}

function ordenarArray(array) {
    // array.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Troca os elementos
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
