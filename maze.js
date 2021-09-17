let maze = [
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0]
];


function checkPath(start,end){
    maze[start.y][start.x] = 5

    let siblings = getValidSib(start)
    if(siblings.length > 0){
        for (let i = 0; i < siblings.length; i++) {
            let current = siblings[i]

            // if(current.x === end.x && current.y === end.y)
            //     return true
            const isSolved = current.x === end.x && current.y === end.y;
            const notVisited = maze[current.y][current.x] !== 5;

            if (isSolved || checkPath(current, end)) { // черная магия
                maze[current.y][current.x] = 6
                return true;
            }
        }
    }
    return false

    function getValidSib(cord){
        let {x, y} = cord
        let cords = []

        if(maze[y-1] !== undefined){
            cords.push({x:x, y:y-1,val:maze[y-1][x]})
        }
        if(maze[y+1] !== undefined){
            cords.push({x:x, y:y+1,val:maze[y+1][x]})
        }
        if(maze[y][x-1] !== undefined){
            cords.push({x:x-1, y:y,val:maze[y][x-1]})
        }
        if(maze[y][x+1] !== undefined){
            cords.push({x:x+1, y:y,val:maze[y][x+1]})
        }
        return cords.filter(el => el.val === 0)
    }
}


console.log(checkPath({ x: 3, y: 0 }, { x: 5, y: 5 }));
console.log(maze)