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
        //i is an id

        // [1, 2, 3
        //  4, 5, 6
        //, 7, 8, 9]

        // this Board component is taking full control of the child (Square) component
        // in React this is called controlled components
        return (
            <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
        );
    }

    return (
        <div>
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
