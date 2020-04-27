import React, { useState } from "react";
import "./chessboard.css";
import squares from "./squares";
import { Color, Piece } from "./types";

const ChessBoard = (props: any) => {
  const {
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    e1,
    e2,
    e3,
    e4,
    e5,
    e6,
    e7,
    e8,
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
  } = squares;

  const [gameSquares, setGameSquares] = useState<(Piece | null)[][]>([
    [
      a8.pieceAtStart,
      b8.pieceAtStart,
      c8.pieceAtStart,
      d8.pieceAtStart,
      e8.pieceAtStart,
      f8.pieceAtStart,
      g8.pieceAtStart,
      h8.pieceAtStart,
    ],
    [
      a7.pieceAtStart,
      b7.pieceAtStart,
      c7.pieceAtStart,
      d7.pieceAtStart,
      e7.pieceAtStart,
      f7.pieceAtStart,
      g7.pieceAtStart,
      h7.pieceAtStart,
    ],
    [
      a6.pieceAtStart,
      b6.pieceAtStart,
      c6.pieceAtStart,
      d6.pieceAtStart,
      e6.pieceAtStart,
      f6.pieceAtStart,
      g6.pieceAtStart,
      h6.pieceAtStart,
    ],
    [
      a5.pieceAtStart,
      b5.pieceAtStart,
      c5.pieceAtStart,
      d5.pieceAtStart,
      e5.pieceAtStart,
      f5.pieceAtStart,
      g5.pieceAtStart,
      h5.pieceAtStart,
    ],
    [
      a4.pieceAtStart,
      b4.pieceAtStart,
      c4.pieceAtStart,
      d4.pieceAtStart,
      e4.pieceAtStart,
      f4.pieceAtStart,
      g4.pieceAtStart,
      h4.pieceAtStart,
    ],
    [
      a3.pieceAtStart,
      b3.pieceAtStart,
      c3.pieceAtStart,
      d3.pieceAtStart,
      e3.pieceAtStart,
      f3.pieceAtStart,
      g3.pieceAtStart,
      h3.pieceAtStart,
    ],
    [
      a2.pieceAtStart,
      b2.pieceAtStart,
      c2.pieceAtStart,
      d2.pieceAtStart,
      e2.pieceAtStart,
      f2.pieceAtStart,
      g2.pieceAtStart,
      h2.pieceAtStart,
    ],
    [
      a1.pieceAtStart,
      b1.pieceAtStart,
      c1.pieceAtStart,
      d1.pieceAtStart,
      e1.pieceAtStart,
      f1.pieceAtStart,
      g1.pieceAtStart,
      h1.pieceAtStart,
    ],
  ]);

  const getCellColor = (rowIndex: number, cellIndex: number): Color => {
    return (rowIndex + cellIndex) % 2 === 0 ? Color.white : Color.black;
  };

  return (
    <div className={"chessboard"}>
      {gameSquares.map((row, rowIndex) => {
        return (
          <div className={"row"}>
            {row.map((cell, cellIndex) => {
              return (
                <div className={`cell ${getCellColor(rowIndex, cellIndex)}`}>
                  <div className={`piece ${cell?.name}-${cell?.color}`}></div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
