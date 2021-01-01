function solve(input) {
    let wrongMoveResult = '';
    let winResult = '';
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let coordinates = input.slice();
    let currPlayer = 'X';
    for (let el of coordinates) {

        let [row, col] = el.split(' ').map(Number);

        if (dashboard[row][col] !== false) {
            wrongMoveResult += 'This place is already taken. Please choose another!';
            continue;
        }
        dashboard[row][col] = currPlayer;
        currPlayer === 'X' ? currPlayer = 'O' : currPlayer = 'X';

        if (weHaveAWinner(dashboard) || !dashboard.flat().includes(false)) {
            break;
        }
    }

    function weHaveAWinner(dashboard) {

        if (diagonalWinO(dashboard)) {

            return winResult += 'Player O wins!';
        }
        if (diagonalWinX(dashboard)) {

            return winResult += 'Player X wins!';
        }
        for (let row = 0; row < 3; row++) {

            let currRow = '';
            let currCol = '';

            for (let col = 0; col < 3; col++) {
                currRow += dashboard[row][col];
                currCol += dashboard[col][row];
            }
            if (currRow === 'XXX' || currCol === 'XXX') {

                return winResult += 'Player X wins!'; //to set a break somewhere

            } else if (currRow === 'OOO' || currCol === 'OOO') {

                return winResult += 'Player O wins!';
            }
        }
    }

    function diagonalWinX(dashboard) {

        return (dashboard[0][0] === 'X' && dashboard[1][1] === 'X' && dashboard[2][2] === 'X') ||
            (dashboard[0][2] === 'X' && dashboard[1][1] === 'X' && dashboard[2][0] === 'X');
    }

    function diagonalWinO(dashboard) {

        return (dashboard[0][0] === 'O' && dashboard[1][1] === 'O' && dashboard[2][2] === 'O') ||
            (dashboard[0][2] === 'O' && dashboard[1][1] === 'O' && dashboard[2][0] === 'O') //write one func for X nd O
    }
    if (wrongMoveResult) {

        console.log(wrongMoveResult);
    }
    if (winResult) {

        console.log(winResult);
    } else {

        console.log(`The game ended! Nobody wins :(`);
    }
    dashboard.forEach(e => console.log(e.join('\t')));
}
console.log(solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]));
