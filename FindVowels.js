console.log(findVowels('helloo')); // 2
console.log(findVowels('why')); // 0

function findVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        vowels.indexOf(str[i]) > -1 ? count++ : count
    }

    return count
}