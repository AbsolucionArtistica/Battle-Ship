import React, { useState } from "react";

const Tile = ({ value, rowIndex, colIndex, updateTileValue }) => {
  const handleColorChange = () => {
    if (value === 1 || value === 2) { // A part of ship
      updateTileValue(rowIndex, colIndex, 2); // Hit
    } else {
      updateTileValue(rowIndex, colIndex, 3); // Missed shot
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
    <button className="tile" style={{ backgroundColor: getTileColor() }} onClick={handleColorChange}></button>
  );
};

const GameBoard = () => {
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
  };

  return (
    <div className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <Tile key={colIndex} value={value} rowIndex={rowIndex} colIndex={colIndex} updateTileValue={updateTileValue} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
