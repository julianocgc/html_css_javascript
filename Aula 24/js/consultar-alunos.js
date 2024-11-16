var btnConsultar = document.querySelector("#btnConsultarAluno");

btnConsultar.addEventListener("click", function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:8080/aluno/listar");
    xmlhttp.send();
    xmlhttp.addEventListener("load", function() {
        var listaDeAlunos = JSON.parse(xmlhttp.responseText);
        listaDeAlunos.forEach(aluno => {
            adicionaAlunoNaTabela(aluno);
        });
    })
})

function adicionaAlunoNaTabela(aluno) {
    var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody");
    var linha = criaLinhaAluno(aluno);

    tabelaAlunos.appendChild(linha);
}