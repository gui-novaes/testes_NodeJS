// DODEV SCHOOL

// 1° PASSO - Elabore uma função para calcular o gasto de combustível por km rodado. Utilize as seguintes recomendações:
// Essa função deve receber dois parâmetros: a distância a ser percorrida em metros, e o tipo de combustível do carro;
// Um carro roda 16km/litro com gasolina e 11km/litro com etanol;
// A função deve retornar um int que representa quantos litros serão necessários para o percurso.

let distanciaEmMetros = parseInt();
let tipoCombustivel;
let litro = parseInt();
let km;

// 2° PASSO - O parâmetro de distância deve ser um inteiro e não pode ser negativo. Já o de combustível deve ser uma string e só pode ter "gasolina" ou "etanol".
function CalculoCombustivel(distanciaEmMetros, tipoCombustivel) {
    if(tipoCombustivel.toLowerCase() === 'gasolina'){
        km = distanciaEmMetros / 1000
        litro = km / 16
        //console.log(`${km}km com ${tipoCombustivel} tem um gasto de ${Math.trunc(litro)} litros.`)
        return Math.trunc(litro)
    }else if(tipoCombustivel.toLowerCase() === 'etanol'){
        km = distanciaEmMetros / 1000
        litro = km / 11
        //console.log(`${km}km com ${tipoCombustivel} tem um gasto de ${Math.trunc(litro)} litros.`)
        return Math.trunc(litro)
    }else if(distanciaEmMetros < 0){
        console.log('Opção inválida. A distância precisa ser maior que 0.')
        return false
    }else if(tipoCombustivel.toLowerCase() !== 'gasolina' || tipoCombustivel.toLowerCase() !== 'etanol'){
        console.log('Opção inválida. Digite apenas [Gasolina] ou [Etanol]')
        return false
    }
}

// 3° PASSO - Implementar testes unitários para garantir que as validações e as funções principais estão funcionando como o esperado. Importante que os testes sejam implementados em um arquivo diferente das funções principais.

module.exports = {CalculoCombustivel}