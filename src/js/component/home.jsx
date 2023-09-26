import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import GameRules from "./gameView";
import { RowNumbers, ColNumbers } from "./coordinatesNumbers";

//create your first component
const Home = () => {
	return (
		<>
			<GameRules/>
		</>
	);
};

export default Home;
