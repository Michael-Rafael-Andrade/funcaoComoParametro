// Aula 01 - Back-End - Pós Graduação - Full Stack - IFET
// Função passando como parâmetro uma outra função

function mensagem_usuario(nome_usuario) {
    console.log(`Olá, ${nome_usuario}, seja bem-vindo(a) à Aplicação ABC`);
}

function exibe_mensagem(funcao_mensagem) {
    // simulando a recuperação do nome do usuário de um Banco de Dados
    let nome_usuario = "Paulo";

    // executa a função recebida com parâmetro
    funcao_mensagem(nome_usuario);
}

exibe_mensagem(mensagem_usuario);

// Outra forma de passar funções como parametro

let vetor = [1, 2, 3, 4, 5];

function duplicar(num) {
    console.log(num * 2);
}

function adiciona_10(num) {
    console.log(num + 10);
}

vetor.map(duplicar); 
vetor.map(adiciona_10);
// map vai ser responsável por pegar cada elemento do veotr executar a função individual de cada um.