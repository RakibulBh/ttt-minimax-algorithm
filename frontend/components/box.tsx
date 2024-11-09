"use client";
import O from "./o";
import X from "./x";

const Box = ({
  row,
  col,
  value,
  changeVal,
}: {
  row: number;
  col: number;
  value: string;
  changeVal: (r: number, c: number) => void;
}) => {
  const onClick = () => {
    changeVal(row, col);
  };
  return (
    <div
      onClick={onClick}
      className="rounded-xl bg-[#1F3540] shadow-lg flex items-center justify-center hover:scale-110 transition-transform ease-in-out duration-500 p-6"
    >
      {value === "X" && <X />}
      {value === "O" && <O />}
      {value === "." && ""}
    </div>
  );
};

export default Box;
