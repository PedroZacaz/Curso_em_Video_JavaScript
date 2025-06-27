function parimpar(n){
    if (n%2 == 0) {
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}
//Precisa criar uma variavel para receber o return, se quiser
let res = parimpar(9321)
console.log(res)
//console.log(parimpar(4))