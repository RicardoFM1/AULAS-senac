// let nome = prompt("Digite um nome")

//  COMPARAÇÃO
// == SE O VALOR É IGUAL
// === SE O VALOR E O TIPO SÃO IGUAIS
// console.log(3 === "3")
// != diferente
// || OU 
// && E
//CONDICIONAL 
// if(condicao){
// executa
// }
// else if(condicao){
// executa
//}
//else{
// executa
//}
// if(nome == "Anderson"){
//     console.log("if 1")
//     alert("Você é muito bonito")
// }
// else if(nome == "José"){
//     console.log("if 2")
//     alert("Você não é bonito")
// }
// else{
//     console.log("else")
//     alert(`seu nome é ${nome}`)
// }
// if(nome != "Maria"){
//     alert("Seu nome deve ser Maria")
// }
// if(nome == "Anderson" || nome == "Pedro"){
//     alert("VOcê ganhou o prêmio")
// }
// if(nome.toLowerCase() == "anderson" && 1>0){
//     alert("Parabens!")
// }

// let operador = prompt(`Digite uma opção,
//     1 - soma, 
//     2 - subtração, 
//     3 - multiplicação, 
//     4 - divisão`)
// if(operador != "1" && operador != "2" && operador != "3" && operador != "4"){
//     alert("Operação inválida")
// } else{ 
//     alert("Faça uma conta")
// let primeiroNumero = parseInt (prompt(`Digite o primeiro número`))
// let segundoNumero  = parseInt (prompt(`Digite o segundo número`))
// soma = primeiroNumero + segundoNumero
// sub = primeiroNumero - segundoNumero
// mult = primeiroNumero * segundoNumero
// div = primeiroNumero / segundoNumero
// if(operador == "1")    
//     alert(`A soma do seu número é: ${soma}`)
// if(operador == "2")    
//     alert(`A subtração do seu número é: ${sub}`)
// if(operador == "3")    
//     alert(`A multiplicação do seu número é: ${mult}`)
// if(operador == "4"){
//     alert(`a divisão do seu número é: ${div}`)
// if(operador == "4")  
//     div = primeiroNumero / segundoNumero == 0
//     alert("ERRO")
// }
// }

//posso inverter o "ERRO" e colocar antes do alerta da div que vai aparecer antes
//posso colocar mais chaves se quiser

// let operador = prompt(`Digite uma opção,
//     1 - soma, 
//     2 - subtração, 
//     3 - multiplicação, 
//     4 - divisão`)
// if(operador != "1" && operador != "2" && operador != "3" && operador != "4"){
//     alert("Operação inválida")
    
// } else{
//     alert("Faça uma conta")

// let primeiroNumero = parseInt (prompt(`Digite o primeiro número`))
// let segundoNumero  = parseInt (prompt(`Digite o segundo número`))
// soma = primeiroNumero + segundoNumero
// sub = primeiroNumero - segundoNumero
// mult = primeiroNumero * segundoNumero
// div = primeiroNumero / segundoNumero
// if(operador === "1"){  
//     alert(`A soma do seu número é: ${soma}`)
// }if(operador === "2"){
//     alert(`A subtração do seu número é: ${sub}`)
// }if(operador === "3"){
//     alert(`A multiplicação do seu número é: ${mult}`)
// }if(operador === "4"){
//     alert(`a divisão do seu número é: ${div}`)
// }
// }
    

    



 




                    // AULA 3:



// let nome = "Anderson"
// let numeros = [0,1,2,3,4]  -- CRIAR UMA LISTA!!



// console.log(nome.length)
// console.log(numeros)


//LAÇO FOR - LAÇO DE REPETIÇÃO
// < MENOR QUE
// > MAIOR QUE

// FOR PERCORRE UMA LISTA.
// [ 1,2,3 ] -- 1 = i(0), 2 = i(1) e 3 = (2)
// index = 0 até o último elemento da lista.

// let contadorVogais = 0 -- declara 0 porque vai declarar dentro do for
// let nome = "Anderson"
// for(let i = 0; i < nome.length; i++){ -- declara variável i(index) = 0, enquanto i for menor que a largura do nome, aumente a quantidade do valor de i.
//     console.log(nome[i],i) 
//     if(nome[i].toLowerCase() === "a" || nome[i].toLowerCase()==="e" || nome[i].toLowerCase()==="i"|| nome[i].toLowerCase()==="o" || nome[i].toLowerCase()==="u"){
//         contadorVogais++
//     }
    
// }

// console.log(contadorVogais,"Seu nome possui esse numero de vogais")

// let numeros = [ 0,1,2,3,4,5,6,7,10,43,50 ] 
// let pares = []
// let impares = []
// for(let i = 0; i< numeros.length;i++){
//     if(numeros[i] % 2 == 0){
//         pares.push(numeros[i])
//     }else{
//         impares.push(numeros[i])
//     }
// }

// console.log(numeros)
// console.log(pares)
// console.log(impares)


// ATIVIDADE 1

// DESENVOLVA UM ALGORITMO QUE INVERTE UMA PALAVRA, E EXIBA ELA DE TRÁS PARA FRENTE.
// PODE SER USADO O PROMT/ALERT OU SOMENTE O CONSOLE.LOG EXEMPLO : "banana" - > "ananab"

// let palavra  = (prompt("Digite a palavra que queira inverter"));
// palavraInvertida = "";

// for (let i = palavra.length - 1; i >= 0; i--) {
//     palavraInvertida = palavraInvertida + palavra[i];
// }
// alert(`Sua palavra invertida é: ${palavraInvertida}`) 








// ATIVIDADE 2

// DESENVOLVA UM ALGORITMO QUE RECEBE UMA PALAVRA OU FRASE, E EXIBA ELA DA SEGUINTE FORMA
// SE O INDEX DELA FOR PAR, O CARACTER DEVE SER MAIÚSCULO, 
// SE O INDEX FOR ÍMPAR O CARACTER DEVE SER MINÚSCULO EXEMPLO : "algoritmo" -> "AlGoRiTmO"

// let palavra = "algoritmo"
// let palavraMesclada = ""


// for(let i = 0; i < palavra.length; i++) { 
//     if (i % 2 === 0){
//         palavraMesclada += palavra[i].toUpperCase()
//     }else { 
//         palavraMesclada += palavra[i].toLowerCase()
//     }   
// }
// console.log(palavraMesclada)





// ATIVIDADE 3

// -DESENVOLVA UM ALGORITMO QUE RECEBE UM ARRAY DE NÚMEROS -SE O NÚMERO 
// FOR DIVISÍVEL POR 3 EXIBA A PALAVRA "plic" -SE O NÚMERO FOR DIVISÍVEL POR 5 EXIBA A PALAVRA 
// "plac" -SE O NÚMERO FOR DIVISÍVEL POR 3 E POR 5 EXIBA A PALAVRA "boom" -SE O NÚMEOR NÃO FOR DIVISEL 
// NEM POR 3 E NEM POR 5, SOMENTE EXIBA O NÚMERO -O RESULTADO DEVE SER EXIBIDO EM UM ARRAY EXEMPLO : 
// [1,2,3,4,5,6,7,8,9,15] -> [1,2,"plic",4,"plac",6,7,8,"plic","boom"]

// let numeros = [1,2,3,5,6,7,11,15,20,25,30]
// let resultado = []

// for(let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
//         resultado.push("boom");
//     }else if (numeros[i] % 5 === 0){  -- push adiciona um ou mais elementos para um Array, nesse 
//         resultado.push("plac");         nesse caso ele COLOCA mais um elemento na variável "resultado"
//     }else if(numeros[i] % 3 === 0){      que eu quero definir qual vai ser, ja que nao defini antes.
//         resultado.push("plic") 
//     }else {   
//         resultado.push(numeros[i])
//     }
// }
// console.log(resultado)




























// 1 - DESENVOLVA UM ALGORITMO QUE SIMULE UM EMPRÉSTIMO
//   - O USUÁRIO DEVE INSERIR O VALOR DESEJADO DE EMPRÉSTIMO
//   - O NÚMERO DE PARCELAS
//   - OS JUROS EM CADA PARCELA
// -OBS: OS JUROS MENSAIS NÃO PODEM SER MENOR DO QUE 5% AO MÊS ---
// - NO FINAL VOCÊ DEVE EXIBIR:
//   - VALOR FINAL DO EMPRÉSTIMO COM OS JUROS
//   - VALOR DE CADA PARCELA COM OS JUROS
//   - NÚMERO DE PARCELAS


let emprestimo = parseFloat(prompt("Digite o valor do empréstimo que deseja:"))
let jurosParcelas = parseFloat(prompt("Digite o juros da parcela(em %):"))
if(jurosParcelas < 5){
    alert("O valor do juros não deve ser menor que 5%")
}else {
let numeroParcelas = parseInt(prompt("Digite o número de parcelas:"))



let valorPrestacao = emprestimo / numeroParcelas
let jurosMensais = emprestimo * (jurosParcelas / 100)
let valormensalcomJuros = valorPrestacao + jurosMensais
let totalaPagar = valormensalcomJuros * numeroParcelas
if(isNaN(totalaPagar) || isNaN(valormensalcomJuros) || isNaN(numeroParcelas) || isNaN(emprestimo) || isNaN(jurosParcelas)){ 
        alert("insira um valor numérico válido!")
}else{
alert(`O valor a pagar será de: R$ ${totalaPagar.toFixed(2)}`)

alert(`O valor de cada parcela com juros é de: R$ ${valormensalcomJuros.toFixed(2)}`)

alert(`O número de parcelas será de: ${numeroParcelas}`)
}
}

























// 2 - DESENVOLVA UM ALGORIMTO QUE RECEBE UMA PALAVRA DIGITADA PELO USUÁRIO
//     - VOCÊ DEVE EXIBIR AO FINAL:
//       - TAMANHO DA PALAVRA
//       - NÚMERO DE VOGAIS
//       - PALAVRA INVERTIDA

// 3 - DESENVOLVA UM ALGORITMO QUE RECEBA DO USUÁRIO
//     - UMA LISTA DE NÚMEROS
//     - UM NÚMERO, PARA SER USADO COMO MULTIPLICADOR
//       - VOCÊ DEVE EXIBIR AO FINAL
//         - A SOMA DE TODOS OS NÚMEROS
//         - UMA LISTA DOS NÚMEROS QUE SÃO DIVISÍVEIS PELO MULPLICADOR INFORMADO.
