import React from "react";
import Box from "./box";

const Grid = () => {
  return (
    <div className="w-96 h-96 grid grid-cols-3 grid-rows-3 gap-4">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
};

export default Grid;
