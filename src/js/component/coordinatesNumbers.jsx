import React from "react";

const RowNumbers = () => {

    return (

        <div className="rowCoordiantes bg-secondary d-flex text-center">
            <div className="cornerTile"></div>
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
    )
}

const ColNumbers = () => {

    return (
        <div className="col-sm-6 colCoordinates bg-secondary text-center">
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
    )
}

export { RowNumbers, ColNumbers }
