import { React } from "react";
import Square from "./Square";

const Board = (props) => {
    //hook state
    // const [squares, setSquares] = useState(props.squares);

    // // [
    // // 'O', null, 'X',
    // // 'X', 'X', 'O',
    // // 'O', null, null,
    // // ]
    // const [xTurn, setXTurn] = useState(props.xTurn); // X is after O by default

    //=================================================================//
    function renderSquare(i) {
        return (
            <Square
                key={i}
                index={i}
                value={props.squares[i]}
                winnings={props.winnings}
                onClick={() => props.onClick(i)}
            />
        );
    }

    function renderBoard(row, col) {
        let squares = [];

        for (let boardRow = 0; boardRow < row; boardRow++) {
            //squares each row
            let eachRow = [];
            let colIdx = boardRow * 3;

            for (let i = colIdx; i < colIdx + col; i++) {
                eachRow.push(renderSquare(i));
            }

            squares.push(
                <div key={boardRow} className="board-row">
                    {eachRow}
                </div>
            );
        }
        //=================================================================//

        //i is an id (0 - 8)

        //in the squares array:

        // ['<div className="board-row">
        //      {renderSquare(0)}
        //      {renderSquare(1)}
        //      {renderSquare(2)}
        // </div>',
        // '<div className="board-row">
        //      {renderSquare(3)}
        //      {renderSquare(4)}
        //      {renderSquare(5)}
        // </div>',
        // '<div className="board-row">
        //      {renderSquare(6)}
        //      {renderSquare(7)}
        //      {renderSquare(8)}
        // </div>']

        // results:

        // [1, 2, 3
        //  4, 5, 6
        //, 7, 8, 9]

        //=================================================================//

        // here returning an array of elements
        // reference: https://reactjs.org/docs/lists-and-keys.html
        return squares;
    }

    return (
        <div>
            {/*  hard code board generation prior to 0.6 */}
            {/* <div className="board-row">
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
            </div> */}

            {/* rendering a board dynamically */}

            {renderBoard(3, 3)}
        </div>
    );
};

export default Board;
