function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if(num % i === 0){
            return false
        }
    }
    return num > 1
}
function Primes(num) {
    const result = []

    for(let i = 2; i <= num; i++){
        if(isPrime(i)){
            result.push(i)
        }
    }

    return result
}
console.log(Primes(120))

