import React, { useEffect, useState } from "react";

const GameRules = () => {

  const handleTurn = () => { }

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
      <button className="tile" style={{ backgroundColor: getTileColor() }} onClick={handleColorChange}></button>
    );
  };

  const CPUTile = () => {
    let randomIndex = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

    const [cpuRowIndex, cpuColIndex] = randomIndex();
    const newValue = gameBoard[cpuRowIndex][cpuColIndex] === 1 ? 2 : 3;
    updateCPUTileValue(cpuRowIndex, cpuColIndex, newValue);

    const getCPUTileColor = () => {
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
      <button className="tile" style={{ backgroundColor: getCPUTileColor() }}></button>
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
      <div className="game-board col-6">
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((value, colIndex) => (
              <Tile key={colIndex} value={value} rowIndex={rowIndex} colIndex={colIndex} updateTileValue={updateTileValue} />
            ))}
          </div>
        ))}
        <div className="d-flex justify-content-center m-1">
          <FireButton />
        </div>
      </div>
    );
  };

  const CPUGameBoard = () => {
    const [cpuGameBoard, setCPUGameBoard] = useState([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    const updateCPUTileValue = (rowIndex, colIndex, newValue) => {
      const newCPUGameBoard = cpuGameBoard.map((row, rIndex) => {
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
  
      setCPUGameBoard(newCPUGameBoard);
    };

    return (
      <div className="game-board col-sm-6">
        {cpuGameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((value, colIndex) => (
              <CPUTile key={colIndex} value={value} rowIndex={rowIndex} colIndex={colIndex} updateCPUTileValue={updateCPUTileValue}/>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <GameBoard />
      <CPUGameBoard />
    </>
  );
};

export default GameRules;



