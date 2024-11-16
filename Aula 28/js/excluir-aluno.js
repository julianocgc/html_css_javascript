var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("click", function(event) {
    var elementoClicado = event.target;
    if (elementoClicado.classList.contains("btn-excluir")) {
        var celula = elementoClicado.parentNode;
        var linha = celula.parentNode;

        var celulaId = linha.querySelector(".td-id");
        var id = celulaId.textContent;

        var celulaNome = linha.querySelector(".td-nome");
        var nome = celulaNome.textContent;

        if (confirm("Deseja excuir o(a) aluno(a) " + nome) == true) {
            removeAlunoDaAPI(id);
            linha.remove();
        }
    }
});

function removeAlunoDaAPI(idAluno) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("DELETE", "http://localhost:8080/aluno/deletar?id=" + idAluno);
    xmlhttp.send();
}