import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function getLocation(location) {
    //brute forcing  manually for the tictactoe 3x3 board
    const rowCol = [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 1, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 2 },
        { row: 2, col: 0 },
        { row: 2, col: 1 },
        { row: 2, col: 2 },
    ];

    return rowCol[location];
}

function App() {
    //filling up the history with array of objects of the current board condition
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [xTurn, setXTurn] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [positions, setPositions] = useState([]);
    const [reverse, setReverse] = useState(false);
    const [draw, setDraw] = useState(false);

    //function to check the winner
    function calculateWinner(squares) {
        //brute forcing or hard coding the winning lines
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                // console.log([a, b, c]);
                return { player: squares[a], winning: [a, b, c] };
                // squares: show the winner X or O
                // winnings: the winning squares
            }
        }
        //if no winner yet, return nothing
        return null; // or draw -- MIGHT IMPLEMENT DRAW HERE
    }

    const currentHistory = history;
    const current = currentHistory[stepNumber];
    // const current = currentHistory[stepNumber];

    const winner = calculateWinner(current.squares);

    //end of game variable
    // const endOfGame = !current.squares.includes(null);

    //set the winnings squares / line (infinite loops)
    // setWinningSquares(winner.winning);
    // setWinningSquares(() => winner.winning);

    //jump to moves
    const jumpTo = (step) => {
        setStepNumber(step);
        setXTurn(step % 2 === 0);

        //handle draw here
        // console.log(step);
        step !== 9 ? setDraw(false) : setDraw(true);
    };

    //react styling using javascript object (notice the camelCase of CSS properties)
    const bold = { fontWeight: "bold" };

    const moves = currentHistory.map((step, move) => {
        //move is the current index while step is the value
        //so 0 is the initial move (game start)
        // 1 is the first move and so on....
        const desc = move
            ? "Go to move #" +
              move +
              ` (row: ${positions[move - 1].row}, col: ${
                  positions[move - 1].col
              })`
            : "Restart Game";

        // For each move in the tic-tac-toe game’s history, we create a list item <li> which contains a button <button>. The button has a onClick handler which calls a method called this.jumpTo(). We haven’t implemented the jumpTo() method yet.
        return (
            <li key={move}>
                <button
                    style={move === stepNumber ? bold : {}}
                    onClick={() => jumpTo(move)}
                >
                    {" "}
                    {desc}
                </button>
            </li>
        );
    });

    let status;

    //if there is an object winner (not null)
    if (winner) {
        status = "Winner: " + winner.player;

        // ARE NOT ABLE TO DO THIS, caught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop. NEED TO FIND OUT

        // reason: https://alexsidorenko.com/blog/react-infinite-loop/
        //in short: can't update the state inside render or not inside function call

        // setWinningSquares(() => [...winningSquares, 1, 2, 3]);
    } else if (draw) {
        status = "DRAW !";
    } else {
        status = "Next Player: " + (xTurn ? "X" : "O"); //this is causing the board to move around
    }

    //handle the click on the each box
    const handleClick = (pos) => {
        //if the game is restarted then restart the positions array (null it)
        //it needs to be here to ensure positions is null after location is read inside move() function
        if (stepNumber === 0) {
            setPositions([]);
        }
        //this is to ensure if we “go back in time” and then make a new move from that point, we throw away all the “future” history that would now be incorrect
        const innerHistory = history.slice(0, stepNumber + 1); //make a copy of array from index 0 to x + 1 (e.g. if 0 to 4, then copy element from 0-3)

        const innerCurrent = innerHistory[innerHistory.length - 1];

        const squares = innerCurrent.squares.slice(); //make a copy of the every move (squares object) inside

        // console.log(squares);

        // //immutability by creating a copy of squares array
        // const newSquares = squares.slice(); //slice is a function to take portions of an array, in this case it takes all current array inside squares state
        // newSquares[i] = xTurn ? "X" : "O";

        // === handle draw here ===
        // logics: if it has reached end of game and winner still null then it's a draw or no one wins then

        if (stepNumber === 8 && !winner) {
            setDraw(true);
        }

        //return early by ignoring click if someone has won the game
        if (calculateWinner(squares) || squares[pos]) {
            return;
        }
        squares[pos] = xTurn ? "X" : "O";

        setStepNumber(innerHistory.length);
        setHistory(innerHistory.concat([{ squares: squares }]));
        setXTurn(!xTurn);

        //set positions for each move (or each index) by adding a new element to the array

        //like positions += positions + somethingElse

        setPositions(() => [
            ...positions,
            { row: getLocation(pos).row, col: getLocation(pos).col },
        ]);
    };

    //reversing the moves
    const reversePositions = () => {
        //multiple methods on setting up useState value

        // setReverse((rev) => {
        //     return !rev;
        // });
        // setReverse((rev) => !rev);
        setReverse(!reverse);
    };

    //couldn't do this is because in the early game, there are no actually winner.winning
    // console.log(winner.winning);

    return (
        <div className="container">
            {/* <h1>TicTacToe</h1> */}
            <div className="game">
                <div className="game-board">
                    <Board
                        winnings={winner ? winner.winning : []}
                        squares={current.squares}
                        onClick={(i) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <br />
                    <button onClick={reversePositions}>
                        Reverse moves to {reverse ? "Descending" : "Ascending"}
                    </button>
                    <p>
                        Moves history (click the history below to 'time travel'
                        or view previous move):
                    </p>
                    <ol>{reverse ? moves.reverse() : moves}</ol>{" "}
                    {/* this needs to be reversed */}
                </div>
            </div>
        </div>
    );
}

export default App;
