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
    if ( validarNotaTrabalho(frmAluno.trabalho.value) == false ) {
        return false;
    }
    if ( validarNotaProva(frmAluno.prova.value) == false ) {
        return false;
    }
    if (frmAluno.nome.value.length == 0) {
        console.log("Nome inválido");
        return false;
    }

    return true;
}