//Obtem o botão do formulário da página HTML
var btnSalvarAluno = document.querySelector("#btnSalvarAluno");

//Executa a função anonima ao clicar no botão
btnSalvarAluno.addEventListener("click", function (event) {
    //Evita o comportamento padrão que seria recarregar a página
    event.preventDefault();
    
    //Obtem o formulário da nossa página HTML
    var frmAluno = document.querySelector("#frmAluno");

    //Validar campos do formulário
    if (validarFormularioAluno(frmAluno) == false) {
        return;
    }

    var linhaAluno = criaLinhaAluno(frmAluno);

    //Coloca o elemento tr como filha da tabela de alunos
    var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody");
    tabelaAlunos.appendChild(linhaAluno);

    frmAluno.reset();
})

function criaLinhaAluno(frmAluno) {
    //Cria um elemento tr dentro do documento HTML
    var linhaAluno = document.createElement("tr");

    //Coloca os elementos td como filhos do elemento tr
    linhaAluno.appendChild(criaColuna(frmAluno.nome.value));
    linhaAluno.appendChild(criaColuna(frmAluno.trabalho.value));
    linhaAluno.appendChild(criaColuna(frmAluno.prova.value));
    linhaAluno.appendChild(criaColuna(calcularMedia(frmAluno.trabalho.value, frmAluno.prova.value)));

    return linhaAluno;
}

function criaColuna(valor) {
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    return coluna;
}

function validarFormularioAluno(frmAluno) {
    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.textContent = "";

    if (frmAluno.nome.value.length == 0) {
        criaMensagem("Nome inválido");
        return false;
    }
    if ( validarNotaTrabalho(frmAluno.trabalho.value) == false ) {
        criaMensagem("Nota do trabalho inválida.");
        return false;
    }
    if ( validarNotaProva(frmAluno.prova.value) == false ) {
        criaMensagem("Nota da prova inválida.");
        return false;
    }

    return true;
}

function criaMensagem(texto) {
    var msg = document.createElement("div");
    msg.classList.add("alert");
    msg.classList.add("alert-warning");
    msg.textContent = texto;

    var divMensagens = document.querySelector("#divMensagens");
    divMensagens.appendChild(msg);
}