"use client";
import Grid from "@/components/grid";
import { useState } from "react";

export default function Home() {
  const [grid, setGrid] = useState([
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ]);
  const [placed, setPlaced] = useState(0);
  const [turn, setTurn] = useState<Boolean>(true);

  // Move functions inside
  const resetGrid = () => {
    setGrid([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);
    setPlaced(0);
  };

  const changeVal = (r: number, c: number) => {
    if (placed === 9) {
      alert("Someone won!");
      resetGrid();
      return;
    }
    const newGrid = grid.map((row) => [...row]);

    if (newGrid[r][c] === ".") {
      newGrid[r][c] = turn ? "X" : "O";
      setGrid(newGrid);
      setPlaced(placed + 1);
      setTurn(!turn);
    }
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <Grid grid={grid} changeVal={changeVal} />
    </main>
  );
}
