import React, { useState, useEffect } from "react";


export const GameBoard = ({ board, turn, toggleTurn }) => {

  const [gameBoard, setGameBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const randomShipPlacement = () => {
    const shipSizes = [2, 3, 4, 5]; // Tamaños de los barcos
    const boardSize = 10; // Tamaño del tablero
    const shipBoard = Array.from(Array(boardSize), () => Array(boardSize).fill(0));
  
    // Verifica si una ubicación es válida para un barco
    const isValidLocation = (row, col, size, horizontal) => {
      if (horizontal) {
        for (let i = 0; i < size; i++) {
          if (col + i >= boardSize || shipBoard[row][col + i] !== 0) {
            return false;
          }
        }
      } else {
        for (let i = 0; i < size; i++) {
          if (row + i >= boardSize || shipBoard[row + i][col] !== 0) {
            return false;
          }
        }
      }
      return true;
    };
  
    // Colocar aleatoriamente los barcos en el tablero
    for (const size of shipSizes) {
      let row, col, horizontal;
      do {
        row = Math.floor(Math.random() * boardSize);
        col = Math.floor(Math.random() * boardSize);
        horizontal = Math.random() < 0.5; // true para horizontal, false para vertical
      } while (!isValidLocation(row, col, size, horizontal));
  
      // Marcar las casillas ocupadas por el barco
      if (horizontal) {
        for (let i = 0; i < size; i++) {
          shipBoard[row][col + i] = 1;
        }
      } else {
        for (let i = 0; i < size; i++) {
          shipBoard[row + i][col] = 1;
        }
      }
    }
  
    // Actualizar el estado del tablero
    setGameBoard(shipBoard);
  };
  
  useEffect(() => {
    if (board === "player") {
      randomShipPlacement(); // Genera el tablero del jugador
    } else if (board === "cpu") {
      randomShipPlacement(); // Genera el tablero de la CPU
    }
  }, []);
  

  const randomIndex = () => {
    if (board === "player" && turn) { // Solo si es el turno del jugador en el tablero "player"
      const randomRow = Math.floor(Math.random() * 10);
      const randomCol = Math.floor(Math.random() * 10);

      // Actualiza la casilla aleatoria
      updateTileValue(randomRow, randomCol);

      // Alterna el turno
      toggleTurn();
    }
  };

  const updateTileValue = (rowIndex, colIndex, newValue) => { // Actualiza la casilla dependiendo del valor
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

  const Tile = ({ value, rowIndex, colIndex, updateTileValue, turn, board}) => { // Componente de la casilla
    const handleColorChange = () => { // Filtra si debe cambiar de color y/o turno
      if (value === 1) {
        updateTileValue(rowIndex, colIndex, 2); // Si es parte de un barco, se covierte en una parte hundida
        toggleTurn();
      } else if (value === 0) {
        updateTileValue(rowIndex, colIndex, 3); // Si es una parte vacia, se convierte en un disparo fallido
        toggleTurn();
      } else if (value === 2){
        updateTileValue(rowIndex, colIndex, 2); // Si es una parte hundida, se mantiene como parte hundida
      } else if (value === 3){
        updateTileValue(rowIndex, colIndex, 3); // Si es un disparo fallido, se mantiene como un disparo fallido
      } else {
        if (board === "player" && !turn);
        randomIndex();
      }
    };

    const getTileColor = () => { // Color en base al valor
      switch (value) {
        case 0:
          return "white"; // Espacio vacio
        case 1:
          return "white"; // Parte de un barco
        case 2:
          return "red"; // Parte hundida
        case 3:
          return "gray"; // Disparo fallado
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
            <Tile key={colIndex} value={value} rowIndex={rowIndex} colIndex={colIndex} updateTileValue={updateTileValue} board={board} turn={turn}/>
          ))}
        </div>
      ))}
      <div className="d-flex justify-content-center m-1">
      </div>
    </div>
  );
};






