function fatorial(n){
    let fat = 1 
    for(let c = n ; c > 1; c-- ){
        fat *= c // primeiro looping é para dar o valor de n para fat, como no debug
    }
    return fat
}

console.log(fatorial(5))