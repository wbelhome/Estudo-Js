let amigo = {
    nome:'José',
    semo:'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pes ${amigo.peso}`)