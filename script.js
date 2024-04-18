function searchCEP() {
    var cep = document.getElementById('cepInput').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
        var resultDiv = document.getElementById('cepResult');
        resultDiv.innerHTML = `
            <p><strong>CEP:</strong> ${data.cep}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>
        `;
    })
    .catch(error => console.error('Erro ao buscar CEP:', error));
}

function searchLogradouro() {
    var uf = document.getElementById('ufInput').value;
    var cidade = document.getElementById('cidadeInput').value;
    var logradouro = document.getElementById('logradouroInput').value;
    fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`)
    .then(response => response.json())
    .then(data => {
        var resultDiv = document.getElementById('logradouroResult');
        resultDiv.innerHTML = `
            <p><strong>CEP:</strong> ${data[0].cep}</p>
            <p><strong>Logradouro:</strong> ${data[0].logradouro}</p>
            <p><strong>Bairro:</strong> ${data[0].bairro}</p>
            <p><strong>Cidade:</strong> ${data[0].localidade}</p>
            <p><strong>Estado:</strong> ${data[0].uf}</p>
        `;
    })
    .catch(error => console.error('Erro ao buscar logradouro:', error));
}

function calculateFrete() {
    var origemCEP = document.getElementById('origemCEPInput').value;
    var destinoCEP = document.getElementById('destinoCEPInput').value;
    var peso = document.getElementById('pesoInput').value;
    // Colocar no aleatório pois a API do correio não está funcionando
    var frete = peso * peso/25;
    var resultDiv = document.getElementById('freteResult');
    resultDiv.innerHTML = `<p>O valor do frete é R$ ${frete.toFixed(2)}</p>`;
}
