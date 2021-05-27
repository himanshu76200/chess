import React, { useState } from "react";
import Tile from "../../components/Tile/Tile";
import "./Chessbord.css";

const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];

const pieces = [];

for (let i = 0; i < 8; i++) {
  pieces.push({
    image: "assests/images/pawn_b.png",
    x: i,
    y: 6,
  });
}

for (let i = 0; i < 8; i++) {
  pieces.push({
    image: "assests/images/pawn_w.png",
    x: i,
    y: 1,
  });
}

pieces.push({ image: "assests/images/rook_b.png", x: 0, y: 7 });
pieces.push({ image: "assests/images/rook_b.png", x: 7, y: 7 });
pieces.push({ image: "assests/images/knight_b.png", x: 1, y: 7 });
pieces.push({ image: "assests/images/knight_b.png", x: 6, y: 7 });
pieces.push({ image: "assests/images/bishop_b.png", x: 2, y: 7 });
pieces.push({ image: "assests/images/bishop_b.png", x: 5, y: 7 });
pieces.push({ image: "assests/images/queen_b.png", x: 3, y: 7 });
pieces.push({ image: "assests/images/king_b.png", x: 4, y: 7 });

pieces.push({ image: "assests/images/rook_w.png", x: 0, y: 0 });
pieces.push({ image: "assests/images/rook_w.png", x: 7, y: 0 });
pieces.push({ image: "assests/images/knight_w.png", x: 1, y: 0 });
pieces.push({ image: "assests/images/knight_w.png", x: 6, y: 0 });
pieces.push({ image: "assests/images/bishop_w.png", x: 2, y: 0 });
pieces.push({ image: "assests/images/bishop_w.png", x: 5, y: 0 });
pieces.push({ image: "assests/images/queen_w.png", x: 3, y: 0 });
pieces.push({ image: "assests/images/king_w.png", x: 4, y: 0 });

const Chessboard = () => {
  let board = [];

  for (let j = yAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < xAxis.length; i++) {
      const checker = i + j;
      let image = undefined;

      pieces.forEach((piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
        }
      });

      board.push(<Tile image={image} checker={checker} />);
    }
  }
  return <div className="chessboard">{board}</div>;
};

export default Chessboard;
