"use client";
import Grid from "@/components/grid";
import { useState } from "react";

const grid = [
  [".", ".", "."],
  [".", ".", "."],
  [".", ".", "."],
];

export default function Home() {
  const [turn, setTurn] = useState<Boolean>(true);

  const changeVal = (r: number, c: number) => {
    const newVal = turn ? "X" : "O";
    if (grid[r][c] === ".") {
      grid[r][c] = newVal;
      setTurn(!turn);
    }
    return;
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <Grid grid={grid} changeVal={changeVal} />
    </main>
  );
}
