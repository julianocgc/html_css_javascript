var btnConsultar = document.querySelector("#btnConsultarAluno");

btnConsultar.addEventListener("click", function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:8080/aluno/listar");
    xmlhttp.send();
    xmlhttp.addEventListener("load", function() {
        console.log(xmlhttp.responseText);
        var listaDeAlunos = JSON.parse(xmlhttp.responseText);
        console.log(listaDeAlunos);
    })
})