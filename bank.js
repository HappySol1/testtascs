//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10

function iWantToGet(ammountRequired) {
    // console.log(Math.floor(ammountRequired / 100) + " " + ammountRequired % 100)
    let avaleble = [100,50,20,10]
    let res = []

    if(ammountRequired > 0){
        for (let i = 0; i < avaleble.length; i++) {
            res[i] = Math.floor(ammountRequired / avaleble[i])
            ammountRequired = ammountRequired % avaleble[i]
        }
    }else{
        return -1
    }
    return res
}

console.log(iWantToGet(1170))