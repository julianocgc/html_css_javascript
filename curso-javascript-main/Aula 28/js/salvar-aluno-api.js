function salvarAlunoNaAPI(aluno) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "http://localhost:8080/aluno/salvar");
    xmlhttp.setRequestHeader("Content-type", "application/json")
    xmlhttp.send(JSON.stringify(aluno));
    xmlhttp.addEventListener("load", function() {
        if (xmlhttp.responseText == "Saved") {
            criaMensagem("Aluno salvo com sucesso.", "alert-success");
            consultaAlunosDaAPI();
        } else {
            criaMensagem("Erro ao salvar o aluno.", "alert-danger");
        }
    });
}