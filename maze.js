let maze = [
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0]
];

function checkPath(start,end){
    maze[start.y][start.x] = 5
    // while(true){

    // }
    // const found = maze.find(element => element > 10)
    // console.log(found)

    let siblings = getValidSib(start)
    console.log(siblings)
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