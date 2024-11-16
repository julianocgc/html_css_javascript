//Obtem o botão do formulário da página HTML
var btnSalvarAluno = document.querySelector("#btnSalvarAluno");

//Executa a função anonima ao clicar no botão
btnSalvarAluno.addEventListener("click", function (event) {
    //Evita o comportamento padrão que seria recarregar a página
    event.preventDefault();
    
    //Obtem o formulário da nossa página HTML
    var frmAluno = document.querySelector("#frmAluno");

    //Imprime o valor de cada campo do formulário
    console.log(frmAluno.nome.value);
    console.log(frmAluno.trabalho.value);
    console.log(frmAluno.prova.value);

    //Cria um elemento tr dentro do documento HTML
    var linhaAluno = document.createElement("tr");

    //Cria quatro elementos td dentro do documento HTML
    var colunaNome = document.createElement("td");
    var colunaTrabalho = document.createElement("td");
    var colunaProva = document.createElement("td");
    var colunaMedia = document.createElement("td");

    //Coloca o conteúdo correto em cada elemento td criando anteriormente
    colunaNome.textContent = frmAluno.nome.value;
    colunaTrabalho.textContent = frmAluno.trabalho.value;
    colunaProva.textContent = frmAluno.prova.value;

    //Coloca os elementos td como filhos do elemento tr
    linhaAluno.appendChild(colunaNome);
    linhaAluno.appendChild(colunaTrabalho);
    linhaAluno.appendChild(colunaProva);
    linhaAluno.appendChild(colunaMedia);

    //Coloca o elemento tr como filha da tabela de alunos
    var tabelaAlunos = document.querySelector("#tabela-alunos").querySelector("tbody");
    tabelaAlunos.appendChild(linhaAluno);
})