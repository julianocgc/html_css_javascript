var paragrafo = document.querySelector('p');

paragrafo.addEventListener('click', atualizarJogador);

function atualizarJogador() {
    var nome = prompt('Informe seu nome:');
    paragrafo.textContent = 'Jogador 1: ' + nome;
}