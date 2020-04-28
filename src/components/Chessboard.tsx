import React, { useState, useRef } from "react";
import classnames from "classnames";
import "./chessboard.css";
import Engine from "../engine/engine";
import { Color, Piece, GameBoard } from "../types";

const ChessBoard = (props: any) => {
  const engine = useRef(new Engine());

  const [gameBoard, setGameBoard] = useState<GameBoard>(engine.current.board);
  const [pieceSelected, setPieceSelected] = useState<null | [number, number]>(
    null
  );
  const getCellColor = (rowIndex: number, cellIndex: number): Color => {
    return (rowIndex + cellIndex) % 2 === 0 ? Color.white : Color.black;
  };

  const onPieceSelect = (rowIndex: number, cellIndex: number) => (
    e: React.MouseEvent
  ) => {
    if (!pieceSelected) {
      setPieceSelected([rowIndex, cellIndex]);
      return;
    }
    engine.current.move(pieceSelected, [rowIndex, cellIndex], setGameBoard)
    setPieceSelected(null);
  };

  const isCellActive = (rowIndex: number, cellIndex: number) => {
    if (!pieceSelected) return false;
    return pieceSelected[0] === rowIndex && pieceSelected[1] === cellIndex;
  };

  return (
    <div className={"chessboard"}>
      {gameBoard.map((row, rowIndex) => {
        return (
          <div className={"row"}>
            {row.map((cell, cellIndex) => {
              return (
                <div
                  className={classnames([
                    "cell",
                    getCellColor(rowIndex, cellIndex),
                    isCellActive(rowIndex, cellIndex) && "active",
                  ])}
                >
                  <div
                    onClick={onPieceSelect(rowIndex, cellIndex)}
                    className={`piece ${cell?.name}-${cell?.color}`}
                  ></div>
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
