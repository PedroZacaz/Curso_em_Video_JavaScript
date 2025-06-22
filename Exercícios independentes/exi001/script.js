/* Exercícios de estrutura de repetição com Javascript:
1. Leia 20 valores reais e calcule seu somatório utilizando a instrução while */

function calcular(){
    let res = document.querySelector('div#res')
    res.innerHTML = ('Os números que serão calculados: <br>')
    
    let contador = 1
    let soma = 0

    while (contador <= 20){
        let n = (Math.random() * 100).toFixed(2)
        let num = Number(n)
        soma += num
        res.innerHTML += `${num} | `
        contador++
    }
   
    res.innerHTML += (`\u{1F31A} <br> <br>`)
    res.innerHTML += (`Resultado: ${soma.toFixed(2)}`)
}

