// let nome = "Anderson"
// let numeros = [ 0,1,2,3 ]
// console.log(nome)
// console.log(nome.length)

//LAÇO FOR - LAÇO DE REPETIÇÃO
// < MENOR QUE
// > MAIOR QUE

// FOR PERCORRE UMA LISTA.
// [ 1,2,3 ]
// index = 0 até o último elemento da lista.
// let contadorVogais = 0
// for(let i= 0; i < nome.length; i++){
//     console.log(nome[i],i)
//     if(nome[i].toLowerCase() === "a" || nome[i].toLowerCase()==="e" || nome[i].toLowerCase()==="i"|| nome[i].toLowerCase()==="o" || nome[i].toLowerCase()==="u"){
//         contadorVogais++
//     }
//     // console.log(nome[10])
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
// PODE SER USADO O PROMPT/ALERT OU SOMENTE O CONSOLE.LOG EXEMPLO : "banana" - > "ananab"

// let palavra = prompt("Digite uma palavra que queira inverter")
// let palavraInvertida = ""
// for (let i = palavra.length -1; i >= 0; i--){
//     palavraInvertida += palavra[i];
// }
// alert(`Sua palavavra invertida é: ${palavraInvertida}`)
    
    

// ATIVIDADE 2

// DESENVOLVA UM ALGORITMO QUE RECEBE UMA PALAVRA OU FRASE, E EXIBA ELA DA SEGUINTE FORMA
// SE O INDEX DELA FOR PAR, O CARACTER DEVE SER MAIÚSCULO, SE O INDEX FOR ÍMPAR O CARACTER DEVE SER MINÚSCULO EXEMPLO : "algoritmo" -> "AlGoRiTmO"

let palavra = "algoritmo"
let resultado = ""


for(let i = 0; i < palavra.length;1++){
    if(i % 2 === 0){
    resultado += palavra[i].toUpperCase();
}else{
    resultado += palavra[i].toUpperCase();
    console.log(palavra)
}
}
console.log(resultado)












// ATIVIDADE 3

// -DESENVOLVA UM ALGORITMO QUE RECEBE UM ARRAY DE NÚMEROS -SE O NÚMERO FOR DIVISÍVEL POR 3 
// EXIBA A PALAVRA "plic" -SE O NÚMERO FOR DIVISÍVEL POR 5 EXIBA A PALAVRA "plac" -SE O NÚMERO 
// FOR DIVISÍVEL POR 3 E POR 5 EXIBA A PALAVRA "boom" -SE O NÚMEOR NÃO FOR DIVISEL NEM POR 3 E NEM POR 5, 
// SOMENTE EXIBA O NÚMERO -O RESULTADO DEVE SER EXIBIDO EM UM ARRAY EXEMPLO : 
// [1,2,3,4,5,6,7,8,9,15] -> [1,2,"plic",4,"plac",6,7,8,"plic","boom"]
