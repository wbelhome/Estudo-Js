function fatorial(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial(n-1) //recursividade, chamada da funcão dentro dela mesmo
    }
}

console.log(fatorial(5))