// Principal função
/* for (var  c = 1 ;c <= 5 ; c++ ) {
    console.log(c)
}
 */ 

function contar(){
    var inicio = document.querySelector('input#txtinicio') // Apesar de estar num input de numero, o Js não considera como Number, é preiso converter 
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#res')
    if ((inicio.value.length && fim.value.length /* && passo.value.length */) == 0){ // O .length serve para contar os caracteres, se tiver nenhum caracter vai ser 0
        res.innerHTML = `Impossível contar`
        //alert('[ERRO] Insira um valor nos campos.')
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            res.innerHTML = ('Contando: <br>')
            for (var c = i; c <= f; c+= p){
                res.innerHTML += (` ${c} \u{1F449} `) // Emoji - Os codigos dos emojis estão no site: unicode.org/emoji/charts/full-emoji-list.html
            }
        }  else{
            res.innerHTML = ('Contando: <br>')
            for (var c = i; c >= f; c-= p){
                res.innerHTML += (` ${c} \u{1F449} `) // emoji
            }
        }
        res.innerHTML += `\u{1F3C1}` // emoji
    }
}