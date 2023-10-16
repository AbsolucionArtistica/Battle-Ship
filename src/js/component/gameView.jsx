import React, { useEffect, useState } from "react";

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
  const [turn, setTurn] = useState(true) // true = player's turn, false = cpu's turn, null = null :)

  const toggleTurn = () => {

    const newTurn = (turn === true ? false : true)
    setTurn(newTurn)
    console.log(newTurn)

    if (turn === true) {
      document.getElementsByClassName("tile").disabled = false;
    } else {
      document.getElementsByClassName("tile").disabled = true;
    }
  };

  const boardBehavior = () => { // aun no esta lista
    if (board === "cpu") {
      const playerGameboard = () => { }
    } else {
      const randomIndex = () => {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

        toggleTurn
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

    toggleTurn
  };

  const Tile = ({ value, rowIndex, colIndex, updateTileValue }) => {
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
      <button className="tile" style={{ backgroundColor: getTileColor() }} onClick={handleColorChange} disabled></button>
    );
  };

  return (
    <div className="game-board col-6">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <Tile key={colIndex} value={value} rowIndex={rowIndex} colIndex={colIndex} updateTileValue={updateTileValue} />
          ))}
        </div>
      ))}
      <div className="d-flex justify-content-center m-1">
      </div>
    </div>
  );
};






