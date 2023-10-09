import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { GameBoard } from "./gameView";
import GameRules from "./gameView";
import { RowNumbers, ColNumbers } from "./coordinatesNumbers";

//create your first component
const Home = () => {
	return (
		<>
		<GameBoard board={"player"} />
		<GameBoard board={"cpu"} />
	  </>
	);
};

export default Home;
