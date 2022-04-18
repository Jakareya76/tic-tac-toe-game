import { useState, useEffect } from "react";
import Squire from "./components/Squire";
import Rule from "./components/Rule";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    onWin();
    onTie();

    if (player === "O") {
      setPlayer("X");
    } else {
      setPlayer("O");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert("Game Over");
    }

    restartGame();
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index === square && value === "") {
          return player;
        }
        return value;
      })
    );
  };

  const onWin = () => {
    Rule.forEach((curValue) => {
      const firstPlayer = board[curValue[0]];

      if (firstPlayer === "") return;

      let foundWinningPattern = true;

      curValue.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const onTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex flex-col w-[500px] h-[500px] shadow-2xl ">
        <div className="flex flex-row justify-center w-full h-[34%]">
          <Squire value={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Squire value={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Squire value={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className="flex flex-row justify-center w-full h-[34%]">
          <Squire value={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Squire value={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Squire value={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className="flex flex-row justify-center w-full h-[34%]">
          <Squire value={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Squire value={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Squire value={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
