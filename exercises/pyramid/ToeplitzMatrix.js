/*

A Toeplitz matrix is one where all elements along diagonals from top left to bottom right are the same. Given a matrix, return true if it is a Toeplitz matrix and false otherwise.



FOLLOWUP:

What if a Toeplitz matrix is allowed to have same elements either top left to bottom right OR top right to bottom left? With the minimal change in code, can you write adapt your solution to test for this new variation?

Examples

This is a Toeplitz matrix:
1  2  3  4
5  1  2  3 
6  5  1  2
7  6  5  1

for (all row - 1)
    for (col)

This is not a Toeplitz matrix:
1  2
2  2
Function Signature
func isToeplitz(input)

Input could be 1x1 matrix, if so always return true since there is no diagonal
Input will have the same number of rows and columns, will be n*n matrix


*/

const mainToeplitz = (matrix) => {
  return checkToeplitz(matrix, 1) || checkToeplitz(matrix, -1);
}

const checkToeplitz = (matrix, direction) => {

for (let i = 0; i < matrix.length; i++) {
  for(let j=0; j<matrix[i].length; j++){
    if (!matrix[i + 1] || matrix[i + 1][j + direction] === undefined) {
        continue;
    }
    if(matrix[i][j] !== matrix[i + 1][j + direction]) {
     return false;
    }
  }
}
return true;
}

// test
// const testMatrix = [];
console.log(mainToeplitz([
  [1, 2, 3, 4],
  [5, 1, 2, 3], 
  [6, 5, 1, 2],
  [7, 6, 5, 1]
]));
console.log(mainToeplitz([
[1, 2, 3, 4],
[8, 1, 2, 3], 
[6, 5, 1, 2],
[7, 6, 5, 1]
]));
console.log(mainToeplitz([]));
console.log(mainToeplitz([
[1, 2, 3],
[5, 1, 2], 
[6, 5, 1],
]));

console.log(checkToeplitz([[1]]));

