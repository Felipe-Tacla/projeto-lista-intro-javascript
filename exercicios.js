// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = Number(prompt(`Qual a altura?`))
const largura = Number(prompt(`Qual a largura?`))
const areaRetangulo = altura * largura
console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt(`Qual o ano atual?`))
const anoDeNascimento = Number(prompt(`Qual o seu ano de nascimento?`))
const minhaIdade = anoAtual - anoDeNascimento
console.log(minhaIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const IMC = peso / (altura * altura)
return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const seuNome = prompt(`Qual o seu nome?`)
const suaIdade = Number(prompt(`Qual a sua idade?`))
const seuEmail = prompt(`Qual o seu email?`)
const frase = (`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`)
console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

const corFavoritaUm = prompt(`Qual a sua primeira cor favorita?`)
const corFavoritaDois = prompt(`Qual a sua segunda cor favorita?`)
const corFavoritaTres = prompt(`Qual a sua terceira cor favorita?`)
const tresCores = [corFavoritaUm, corFavoritaDois, corFavoritaTres]
console.log(tresCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavra = string.toUpperCase()
  return(palavra)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custoTotal = custo / valorIngresso 
return(custoTotal)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanhoStrings = string1.length === string2.length
return(tamanhoStrings)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const retornaUltimoElemento = array.pop()
  return retornaUltimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
    const lista = array
  
    const primeiraPosicao = lista[0]
    const ultimaPosicao = lista[array.length -1]
  
    lista[array.length -1] = primeiraPosicao
    lista[0] = ultimaPosicao
  
    return lista
  
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const igualdade = (string1.toUpperCase() === string2.toUpperCase())
return(igualdade)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = prompt(`Digite o ano atual:`)
const anoDeNascimento = prompt(`Digite o ano de nascimento:`)
const anoEmissaoRG = prompt(`Digite o número da sua identidade:`)
const idade = anoAtual - anoDeNascimento
const dataEmissao = anoAtual - anoEmissaoRG
if(idade <= 20){
  console.log(dataEmissao >= 5)
} else if (idade <= 50) {
  console.log(dataEmissao >= 10)
} else {
  console.log(dataEmissao >= 15)
}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const anoBissexto = ano % 40 === 0 || ano % 4 === 0 && ano % 100 != 0
return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt(`Você tem mais de 18 anos?`)
const ensinoMedioCompleto = prompt(`Você possui ensino médio completo?`)
const disponibilidadeDeHorario = prompt(`Você tem disponibilidade de horário?`)
const resposta = idade.toLowerCase() === `sim` &&
ensinoMedioCompleto.toLowerCase() === `sim` &&
disponibilidadeDeHorario.toLowerCase() === `sim` 
console.log(resposta)
}