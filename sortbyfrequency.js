let classNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
];
console.log(classNames)

let res = classNames.reduce(function (akk,elem){
    if(akk[elem]){
        akk[elem] += 1
    }else{
        akk[elem] = 1
    }
    return akk
}, {})
console.log(res)

let sortableRes = [];
for(let a in res){
    sortableRes.push([a, res[a]]);
}

function sortByOften(arr){
    arr.sort( (a,b) => a[1] > b[1] ? -1 : 1)
}
sortByOften(sortableRes)
console.log(sortableRes)

let fin = []
for (let i = 0; i < sortableRes.length; i++) {
    fin[i] = sortableRes[i][0]
    // console.log(sortableRes[i][0])
}

console.log(fin)