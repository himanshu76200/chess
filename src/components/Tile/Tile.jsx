/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Tile.css";

const Tile = ({ checker, image }) => {
  // const [image, setImage] = useState(null);

  if (checker % 2 === 0) {
    return (
      <div className="tile dark-tile">
        <img src={image} />
      </div>
    );
  } else {
    return (
      <div className="tile light-tile">
        <img src={image} />
      </div>
    );
  }
};

export default Tile;
