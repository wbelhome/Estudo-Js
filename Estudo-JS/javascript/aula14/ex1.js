
function contar(){
    let inicio = document.getElementById('txtnum')
    let fim = document.getElementById('txtnumF')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Falta dados')
    }
    else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value) // Acrescentar valor a variavel do HTML
        let f = Number(fim.value) // Acrescentar valor a variavel do HTML
        let p = Number(passo.value) // Acrescentar valor a variavel do HTML
        if(p <= 0 ){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if( i < f ){ // contagem crescente
             for(let c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
            else{ //contagem regressiva 
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
    }
}