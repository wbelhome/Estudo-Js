let agora = new Date();
let diaSem = agora.getDay();
/* 
   0 = Domingo
   1 = Seg
   2 = Ter
   3 = Qua
   4 = Qui
   5 = Sex
   6 = Sáb  */
   switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Seg')
        break
    case 2:
        console.log('Ter')
        break
    case 3:
        console.log('Qua')
        break
    case 4:
        console.log('Qui')
        break
    case 5:
        console.log('Sex')
        break
    case 6:
        console.log('Sáb')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
   }