function enviarFormulario(){
    console.log("apertou o botão")

    //Capturar os valores do input e criar variavel para objeto JSON
    let contaCliente = new Object();

    contaCliente.nome = document.getElementById("nome").value;
    contaCliente.sobrenome = document.getElementById("sobrenome").value;
    contaCliente.datadenascimento = document.getElementById("datadenascimento").value;
    contaCliente.rg = document.getElementById("rg").value;
    contaCliente.cpf = document.getElementById("cpf").value;
    contaCliente.nacionalidade = document.getElementById("nacionalidade").value;
    contaCliente.naturalidade = document.getElementById("naturalidade").value;
    contaCliente.altura = document.getElementById("altura").value;
    contaCliente.peso = document.getElementById("peso").value;


    //converter para String JSON
    let meuJson = JSON.stringify(contaCliente)

    console.log(meuJson)
    //Mostrar o Array - primitivo
    console.log(contaCliente.valueOf())
}
