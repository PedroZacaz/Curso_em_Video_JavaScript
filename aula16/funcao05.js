//RECURSIVA → É uma função que chama ela mesma para resolver um problema.
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/* 
5! = 5 x 4!
n! = n x (n-1)!
1! = 1
 */