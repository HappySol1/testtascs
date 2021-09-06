function anagram(word1,word2){
    return word1.toUpperCase().split('').sort().join() == word2.toUpperCase().split('').sort().join()
}


console.log(anagram('ffriend','Finderf'))
console.log(anagram('hello','bye'))