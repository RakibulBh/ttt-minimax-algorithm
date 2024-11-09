"use client";
import React, { useState } from "react";
import Box from "./box";

const Grid = ({
  grid,
  changeVal,
}: {
  grid: string[][];
  changeVal: (r: number, c: number) => void;
}) => {
  return (
    <div className="w-96 h-96 grid grid-cols-3 grid-rows-3 gap-4">
      {grid.map((item, row) =>
        item.map((item2, col) => (
          <Box
            value={grid[row][col]}
            changeVal={changeVal}
            key={row + col}
            row={row}
            col={col}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
