//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaDeAmigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        inputAmigo.value = "";
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    exibirListaDeAmigos();
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Função para exibir a lista de amigos na página
function exibirListaDeAmigos() {
    const listaAmigosElemento = document.getElementById('listaAmigos');
    listaAmigosElemento.innerHTML = ""; // Limpa a lista

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElemento.appendChild(li);
    });
}

// Função para realizar o sorteio do amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("É necessário pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const sorteados = [...listaDeAmigos]; // Cria uma cópia da lista
    const resultado = [];

    listaDeAmigos.forEach(amigo => {
        let indiceSorteado;
        do {
            indiceSorteado = Math.floor(Math.random() * sorteados.length);
        } while (sorteados[indiceSorteado] === amigo);

        resultado.push(`${amigo} tirou ${sorteados[indiceSorteado]}`);
        sorteados.splice(indiceSorteado, 1); // Remove o nome sorteado
    });

    exibirResultado(resultado);
}

// Função para exibir o resultado do sorteio
function exibirResultado(resultado) {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = ""; // Limpa o resultado anterior

    resultado.forEach(par => {
        const li = document.createElement('li');
        li.textContent = par;
        resultadoElemento.appendChild(li);
    });
}
