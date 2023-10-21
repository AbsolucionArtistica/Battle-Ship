import React, { useState } from "react";


export const GameBoard = (board) => {

  const [gameBoard, setGameBoard] = useState([
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ]);

  const boardBehavior = () => { // aun no esta lista
    if (board === "player") {
      const playerGameboard = () => { }
    } else {
      const randomIndex = () => {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

      };
    }
  }

  const updateTileValue = (rowIndex, colIndex, newValue) => {
    const newGameBoard = gameBoard.map((row, rIndex) => {
      if (rIndex === rowIndex) {
        return row.map((value, cIndex) => {
          if (cIndex === colIndex) {
            return newValue;
          }
          return value;
        });
      }
      return row;
    });

    setGameBoard(newGameBoard);

    toggleTurn()
  };

  const Tile = ({ value, rowIndex, colIndex, updateTileValue, turn, board}) => {
    const handleColorChange = () => {
      if (value === 1 || value === 2) {
        updateTileValue(rowIndex, colIndex, 2);
      } else {
        updateTileValue(rowIndex, colIndex, 3);
      }
    };

    const getTileColor = () => {
      switch (value) {
        case 0:
          return "white"; // Empty space
        case 1:
          return "white"; // A part of ship
        case 2:
          return "red"; // Hit
        case 3:
          return "gray"; // Missed shot
        default:
          return "white";
      }
    };
    return (
      <button className="tile" style={{ backgroundColor: getTileColor() }} onClick={handleColorChange} disabled={!turn} board={board}></button>
    );
  };

  return (
    <div className="game-board col-6">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <Tile key={colIndex} value={value} rowIndex={rowIndex} colIndex={colIndex} updateTileValue={updateTileValue} board={board}/>
          ))}
        </div>
      ))}
      <div className="d-flex justify-content-center m-1">
      </div>
    </div>
  );
};






