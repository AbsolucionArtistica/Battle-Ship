import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { GameBoard } from "./gameView";
import GameRules from "./gameView";
import { RowNumbers, ColNumbers } from "./coordinatesNumbers";

//create your first component
const Home = () => {
  const [turn, setTurn] = useState(true);

  const toggleTurn = () => {
    setTurn(!turn);
  };

  return (
    <>
      <GameBoard board={"player"} turn={turn} toggleTurn={toggleTurn} />
      <GameBoard board={"cpu"} turn={turn} toggleTurn={toggleTurn} />
    </>
  );
}

export default Home;
