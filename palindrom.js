function ispalinrom(str){
    str = str.split(' ').join('').toUpperCase()
    return str === str.split('').reverse().join('')
}

function ispalinrom2(str) {
    str = str.split(' ').join('').toUpperCase()
    let ln = str.length
    ln % 2 == 1 ? ln -= 1 : ln
    for (let i = 0; i < ln/2; i++) {
        if(str[i] != str[ln - i]){
            return false
        }
    }
    return true
}
console.log(ispalinrom2('racecar'))
console.log(ispalinrom2('table'))
console.log(ispalinrom2('А роза упала на лапу Азора'))
console.log(ispalinrom('racecar'))
console.log(ispalinrom('table'))
console.log(ispalinrom('А роза упала на лапу Азора'))
