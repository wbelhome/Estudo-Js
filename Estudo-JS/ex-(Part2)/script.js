// TESTAR O CÓDIGO AOS POUCOS

function verificar(){
    let data = new Date() //Utiliza a data do computador 
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano') // seleciona elementos do HTML
    let res = document.querySelector('div#res')
    //Lembrar de usar Number para identificar para o JS 
    if(fAno.value.length == 0 || Number(fAno.value) > ano){ 
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }
    else{
        let fsex = document.getElementsByName('radsex') // quando for mais opções, os nomes devem estar iguais no HTML e o ELEMENTS no plural
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img') // Cria um novo elemento no HTML
        
        img.setAttribute('id', 'foto') // cria o id do elemento img criado acima
        
        //Fotos ficaram com dimensionamento errado, mas deu certo

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-m.png') //seleciona a imagem dentro da pasta
            }
            else if(idade < 21){
                img.setAttribute('src', 'jovem-h.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adulto-m.png')
            }
            else{
                img.setAttribute('src', 'idoso.png')
            }
        }
        else if (fsex[1].checked){
            genero ='Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'jovem-f.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adulto-f.png')
            }
            else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center' // centraliza o txto
        res.appendChild(img) // seleciona o elemento para mostrar na tela 
    }




}