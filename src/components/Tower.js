import React from "react";
import { DropTarget } from "react-dnd";

import Tile from "./Tile";
import constants from "./constants/constants";
import { TILE } from "./constants/types";

const towerTarget = {
  canDrop({ isMoveValid, isTheLatter }, monitor) {
    const isOver = monitor.isOver();
    const position = monitor.getItem().position;
    const tileIsTheLatter = isTheLatter(position);
    const target = parseInt(monitor.targetId.substr(1)) + 1;

    return isOver && tileIsTheLatter ? isMoveValid(position, target) : false;
  },
};
