function solve(input) {

  let matrix = input.slice().map(el => el.split(' ').map(Number));
  let mainDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    mainDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][matrix.length - i - 1];
  }

  if (mainDiagonal == secondDiagonal) {

    for (let i = 0; i < matrix.length; i++) {

      for (let j = 0; j < matrix[i].length; j++) {

        if (i == j || j == matrix.length - i - 1) {

          continue;

        }
        matrix[i][j] = mainDiagonal;
      }
    }
  }

  return matrix.forEach(el => console.log(el.join(' ')));
}
console.log(solve(['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1'
]));