import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

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
            return squares[a]; // show the winner X or O
        }
    }
    return null; // or draw
}

function App() {
    //filling up the history with array of objects of the current board condition
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [xTurn, setXTurn] = useState(true);

    const currentHistory = history;
    const current = currentHistory[currentHistory.length - 1];

    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next Player: " + (xTurn ? "X" : "O"); //this is causing the board to move around
    }

    //handling click
    const handleClick = (i) => {
        const squares = current.squares.slice(); //make a copy of the every move (squares object) inside

        // //immutability by creating a copy of squares array
        // const newSquares = squares.slice(); //slice is a function to take portions of an array, in this case it takes all current array inside squares state
        // newSquares[i] = xTurn ? "X" : "O";

        //return early by ignoring click if someone has won the game
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xTurn ? "X" : "O";

        setHistory(currentHistory.concat([{ squares: squares }]));
        setXTurn(!xTurn);
    };

    return (
        <div className="container">
            {/* <h1>TicTacToe</h1> */}
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        </div>
    );
}

export default App;
