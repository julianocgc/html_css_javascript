console.log("Olá mundo!");

var titulo = document.querySelector(".titulo-pagina");
titulo.textContent = "Sistema - EdiCursos";

var trAluno = document.querySelector("#primeiro-aluno");

var tdNome = trAluno.querySelector(".td-nome");
var nome = tdNome.textContent;

var tdTrabalho = trAluno.querySelector(".td-trabalho");
var trabalho = tdTrabalho.textContent;

var tdProva = trAluno.querySelector(".td-prova");
var prova = tdProva.textContent;

var tdMedia = trAluno.querySelector(".td-media");
var media = tdMedia.textContent;