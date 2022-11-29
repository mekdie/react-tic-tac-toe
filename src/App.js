import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
    return (
        <div className="container">
            {/* <h1>TicTacToe</h1> */}
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        </div>
    );
}

export default App;
