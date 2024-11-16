var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("click", function(event) {
    var elementoClicado = event.target;
    if (elementoClicado.classList.contains("btn-excluir")) {
        var celula = elementoClicado.parentNode;
        var linha = celula.parentNode;

        var celulaId = linha.querySelector("td");
        var id = celulaId.textContent;

        removeAlunoDaAPI(id);

        linha.remove();
    }
});

function removeAlunoDaAPI(idAluno) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("DELETE", "http://localhost:8080/aluno/deletar?id=" + idAluno);
    xmlhttp.send();
}