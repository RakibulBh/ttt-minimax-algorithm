"use client";
import Grid from "@/components/grid";
import { useState } from "react";
import { getBestMove } from "./actions";

export default function Home() {
  const [grid, setGrid] = useState([
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ]);

  // Move functions inside
  const resetGrid = () => {
    setGrid([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);
  };

  const changeVal = async (r: number, c: number) => {
    if (grid[r][c] === ".") {
      const newGrid = grid.map((row) => [...row]);
      newGrid[r][c] = "X";
      setGrid(newGrid);

      await handleComputerMove(newGrid);
    }
  };

  const handleComputerMove = async (newGrid: string[][]) => {
    const [r_c, c_c] = await getBestMove({ board: newGrid });
    const computerGrid = newGrid.map((row) => [...row]);
    computerGrid[r_c][c_c] = "O";
    setGrid(computerGrid);
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <Grid grid={grid} changeVal={changeVal} />
    </main>
  );
}
