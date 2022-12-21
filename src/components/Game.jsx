import React from "react";
import Board from "./Board";
import { useContext } from "react";
import GameContext from "../context/GameContext";

const Game = () => {
    const {
        winner,
        status,
        reversePositions,
        current,
        handleClick,
        reverse,
        moves,
    } = useContext(GameContext);
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
                    <ol>{reverse ? moves.slice().reverse() : moves}</ol>
                    {/* this needs to be reversed */}
                </div>
            </div>
        </div>
    );
};

export default Game;
