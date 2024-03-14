import React from "react";
import "./style.css";
import { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [Isxturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner() {
    // 0,1,2
    // 3,4,5
    // 6,7,8
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    return null;
  }
  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus(`The game is draw. Please Restart the game`);
    } else if (getWinner(square)) {
      setStatus(`The Winner is ${getWinner(square)}. Please Restart the game`);
    } else {
      setStatus(`Next turn ${Isxturn ? "X" : "O"}`);
    }
  }, [Isxturn, square]);

  function handleClick(getCurrentSquare) {
    let cpySquare = [...square];
    if (getWinner(cpySquare) || cpySquare[getCurrentSquare]) return;
    cpySquare[getCurrentSquare] = Isxturn ? "X" : "O";
    setIsXturn(!Isxturn);
    setSquare(cpySquare);
  }
  function handleRestart() {
    setIsXturn(true);
    setSquare(Array(9).fill(""));
  }

  return (
    <div className="tic-tac-toe-container">
      <h1>Tic Tac Toe </h1>
      <div className="row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
      <h2>{status}</h2>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}
