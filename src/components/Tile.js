import { DragSource } from "react-dnd";
import react from "react";

import constants from "./constants/constants";
import { TILE } from "./constants/types";

const tile = {
  beginDrag({ position }) {
    return { position };
  },
};

const collect = (connect, monitor) => ({
  dragSource: connect.dragSource(),
  dragPreview: connect.DragPreview(),
  isDragging: monitor.isDragging(),
});

const Tile = ({ position, dragSource, isDragging }) => {
  const display = isDragging ? "none" : "block";
  const opacity = isDragging ? 0.5 : 1;
  const width = `${constants.TOWER_WIDTH} + ${position * 100} px`;
  const offset = `${(position * constants.TILE_WIDTH_BASE) / 2} vw`;

  const tileStyle = {
    display,
    opacity,
    height: "60px",
    width: `calc(${width})`,
    transform: `translateX(calc(${offset} * -1))`,
    border: "4px solid while",
    borderRadius: "10px",
    background: "#764abc",
  };

  return dragSource(<div style={tileStyle} position={position}></div>);
};
