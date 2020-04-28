import { GameBoard } from "../types";
import initialGameBoard from "./initialGameBoard";

class Engine {
  constructor() {
    this.board = initialGameBoard;
  }

  public board: GameBoard;

  validate(squareFrom: [number, number], squareTo: [number, number]): boolean {
    return true;
  }

  move(
    squareFrom: [number, number],
    squareTo: [number, number],
    callback: (board: GameBoard) => void
  ): void {
      if (!this.board[squareFrom[0]][squareFrom[1]]) return callback(this.board);
    if (
      !this.board[squareFrom[0]][squareFrom[1]]?.validate(
        {x: squareFrom[1], y: squareFrom[0]},
        {x: squareTo[1], y: squareTo[0]},
        this.board
      )
    )
      return callback(this.board);
    if (this.validate(squareFrom, squareTo)) {
      this.board[squareTo[0]][squareTo[1]] = this.board[squareFrom[0]][
        squareFrom[1]
      ];
      this.board[squareFrom[0]][squareFrom[1]] = null;
    }

    return callback(this.board);
  }
}

export default Engine;
