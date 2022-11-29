import { React, Component } from "react";
import Square from "./Square";
import { useState } from "react";

// class Board extends Component {
//     renderSquare(i) {
//         return <Square value={i} />;
//     }

//     render() {
//         const status = "Next player: X";

//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

//tic tac toe calculate winner
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

const Board = () => {
    //hook state
    const [squares, setSquares] = useState(Array(9).fill(null));
    // [
    // 'O', null, 'X',
    // 'X', 'X', 'O',
    // 'O', null, null,
    // ]
    const [xTurn, setXTurn] = useState(true); // X is after O by default

    //=================================================================//

    const handleClick = (i) => {
        //immutability by creating a copy of squares array
        const newSquares = squares.slice(); //slice is a function to take portions of an array, in this case it takes all current array inside squares state
        newSquares[i] = xTurn ? "X" : "O";

        //return early by ignoring click if someone has won the game
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        setSquares(newSquares);
        setXTurn(!xTurn);
    };

    function renderSquare(i) {
        //i is an id

        // [1, 2, 3
        //  4, 5, 6
        //, 7, 8, 9]

        // this Board component is taking full control of the child (Square) component
        // in React this is called controlled components
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    }

    // ============ Declaring winner ============= //
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xTurn ? "X" : "O");
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
