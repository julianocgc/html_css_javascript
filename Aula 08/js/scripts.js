console.log("Olá mundo!");

var titulo = document.querySelector(".titulo-pagina");
titulo.textContent = "Sistema - EdiCursos";

var trAluno = document.querySelector("#primeiro-aluno");

var tdNome = trAluno.querySelector(".td-nome");
var nome = tdNome.textContent;

var tdTrabalho = trAluno.querySelector(".td-trabalho");
var trabalho = Number(tdTrabalho.textContent);

var tdProva = trAluno.querySelector(".td-prova");
var prova = Number(tdProva.textContent);

var tdMedia = trAluno.querySelector(".td-media");

if (trabalho < 0 || trabalho > 10) {
    console.log("Nota do trabalho inválida");
}

if (prova < 0 || prova > 10) {
    console.log("Nota da prova inválida");
}

var mediaAluno = (trabalho + prova) / 2;
tdMedia.textContent = mediaAluno;