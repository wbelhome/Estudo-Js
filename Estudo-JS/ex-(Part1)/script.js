function carregar(){
let msg = document.getElementById('msg');
let img = document.getElementById('imagem');
let data = new Date();
let hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`;
if(hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'manha.png'
    document.body.style.background = '#231C0C'
}
else if( hora >= 12 && hora <= 18 ){
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#FCA242'
}
else {
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#342A43'
}
}