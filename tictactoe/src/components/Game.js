import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const styles = {
  width: "200px",
  margin: "20px auto",
};

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber,setstepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current]
    //Si el usuario hace click en una posicion ocupada o si ya hay una combinacion ganadora
    if (winner || squares[i]) return;

    //Asignar "x" o "0"
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory,squares]);
    setstepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };
  const jumpTo = (step) => {
    setstepNumber(step);
    setXisNext( step % 2 === 0)
  };
  const renderMoves = () => {
    history.map((_step,move)=>{
        const destination = move ? `GO to move # ${move}` : "Go to start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {destination}
        </button>
      </li>
    );
    })
    
  };
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner ? "winner:" + winner : "Next Player:" + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
