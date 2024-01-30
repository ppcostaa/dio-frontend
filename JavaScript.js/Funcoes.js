
function escrevaMeuNome(nome){
    return ('Seu nome é '+ nome);
}
escrevaMeuNome('Giovanna');

function verifiqueAMaioridade(idade){
    if (idade >= 18){
        console.log (escrevaMeuNome('Giovanna') + ' e você é maior de idade');
    }
    else{
        console.log (escrevaMeuNome('Giovanna') + 'e você é menor de idade');
    }
}

verifiqueAMaioridade(19);