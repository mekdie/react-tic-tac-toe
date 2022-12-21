import "./App.css";
import { GameProvider } from "./context/GameContext";
import Game from "./components/Game";

function App() {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    );
}

export default App;
