console.log(fibonacci(19))


function fibonacci(num){
    let a = 1,
        b = 1,
        c

    for (let i = 3; i <= num ; i++) {
        console.log(b)
        c = a + b
        a = b
        b = c

    }
    return b
}