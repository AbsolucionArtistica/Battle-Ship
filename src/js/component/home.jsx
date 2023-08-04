import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import GameView from "./gameView";

//create your first component
const Home = () => {
	return (
		<>
			<h1 className="text-center text-light">BattleShip!!!</h1>
			<div className=" d-flex justify-content-center">
				<div className="cornerTile"></div>
				<div className="rowCoordiantes bg-secondary d-flex text-center">
					<div className="tile">1</div>
					<div className="tile">2</div>
					<div className="tile">3</div>
					<div className="tile">4</div>
					<div className="tile">5</div>
					<div className="tile">6</div>
					<div className="tile">7</div>
					<div className="tile">8</div>
					<div className="tile">9</div>
					<div className="tile">10</div>
				</div>
			</div>
			<div className=" d-flex justify-content-center">
				<div className="colCoordiantes bg-secondary text-center">
					<div className="tile">1</div>
					<div className="tile">2</div>
					<div className="tile">3</div>
					<div className="tile">4</div>
					<div className="tile">5</div>
					<div className="tile">6</div>
					<div className="tile">7</div>
					<div className="tile">8</div>
					<div className="tile">9</div>
					<div className="tile">10</div>
				</div>
				<GameView/>
			</div>
		</>
	);
};

export default Home;
