/*let num = [5, 6, 7, 8]

for(let pos = 0; pos < num.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

let num = [12,1,5, 6, 7, 8]
num.sort() // Organiza o array de forma crescente


// utiliza para array e objects
for( let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(5)
    console.log(`O valor 5 está na posição ${pos}`)
