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

    var aluno = obtemAlunoDoFormulario(frmAluno);
    salvarAlunoNaAPI(aluno);
    var linhaAluno = criaLinhaAluno(aluno);

    //Coloca o elemento tr como filha da tabela de alunos
    var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody");
    tabelaAlunos.appendChild(linhaAluno);

    frmAluno.reset();
})

function obtemAlunoDoFormulario(frmAluno) {
    var aluno = {
        nome: frmAluno.nome.value,
        trabalho: frmAluno.trabalho.value,
        prova: frmAluno.prova.value
    }
    return aluno;
}

function criaLinhaAluno(aluno) {
    //Cria um elemento tr dentro do documento HTML
    var linhaAluno = document.createElement("tr");

    //Coloca os elementos td como filhos do elemento tr
    linhaAluno.appendChild(criaColuna(aluno.nome));
    linhaAluno.appendChild(criaColuna(aluno.trabalho));
    linhaAluno.appendChild(criaColuna(aluno.prova));
    linhaAluno.appendChild(criaColuna(calcularMedia(aluno.trabalho, aluno.prova)));
    linhaAluno.appendChild(criaColunaAcoes());

    return linhaAluno;
}

function criaColuna(valor) {
    var coluna = document.createElement("td");
    coluna.textContent = valor;
    return coluna;
}

function criaColunaAcoes() {
    // Criando a coluna ações
    var colunaAcoes = document.createElement("td");
    colunaAcoes.classList.add("td-acoes");

    //Criando o botão excluir
    var botaoExcluir = document.createElement("span");
    botaoExcluir.classList.add("btn-excluir");
    botaoExcluir.textContent = "excluir";

    colunaAcoes.appendChild(botaoExcluir);

    return colunaAcoes;
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