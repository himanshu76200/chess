import React from "react";
import "./Chessbord.css";

const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];

const Chessboard = () => {
  let board = [];
  for (let j = yAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < xAxis.length; i++) {
      const checker = i + j;
      if (checker % 2 === 0) {
        board.push(<div className="tile dark-tile"></div>);
      } else {
        board.push(<div className="tile light-tile"></div>);
      }
    }
  }
  return <div className="chessboard">{board}</div>;
};

export default Chessboard;
