function tabuada() {
    let num = document.getElementById('num') // cria variaveis no JS das tags do html 
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){ // Força o usuário a ter valor de entrada
        window.alert('Por favor digite um numero!')
    }
    else{
        let n = Number(num.value) //adiciona o valor na variavem 
        let i = 1

        tab.innerHTML = '' // Inicia a tabuada sem valor
        
        while (i <= 10 ){
            let item = document.createElement('option') //Cria opções para a tag SELECT do HTML
            item.text = `${n} x ${i} = ${n*i}` // Cria o texto dentro da tag SELECT
            tab.appendChild(item) // Mostra os itens na tag SELECT do HTML --> Linha 3
            item.value = `tab${i}` // Mostra a tabuada selecionada
            i++
        }
    }
        
}