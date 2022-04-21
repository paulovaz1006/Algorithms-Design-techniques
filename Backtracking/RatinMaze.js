function solveTheMaze(maze, x, y, sol, n) {
  if(x == n - 1 && y == n - 1 && maze[x][y] == 1) {
    sol[x][y] = 1;
    return true;
  }

  if(isSafe(maze, x, y, n)) {
    sol[x][y] = 1;    

    if(solveTheMaze(maze, x + 1, y, sol, n))
    return true;  

    if(solveTheMaze(maze, x, y + 1, sol, n))
    return true;

    sol[x][y] = 0;   
     
    return false;
  }
}

function isSafe(maze, x, y, n) {
  return (x >= 0 && x < n
    &&
    y >= 0 && y < n
    &&
    maze[x][y] === 1)
}

const maze = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 1]
];

const n = maze.length;
const sol = [];

for(let i = 0; i < n; i++) {
  sol.push(new Array(n).fill(0));
}

if(solveTheMaze(maze, 0, 0, sol, n)) {
  for(let i = 0; i < n; i++) {
    str = '';

    for(let j = 0; j < n; j++) {
      str += sol[i][j]+ ''
    }

    console.log(str);
  }
} else {
  console.log("No path available");
}