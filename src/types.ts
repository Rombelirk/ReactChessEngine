export enum Color {
  black = "black",
  white = "white",
}

export type UnionPiece = Rook | Bishop | Knight | Pawn | Queen | King;

export class Piece {
  public name: string = "";
  public readonly color: Color;
  constructor(color: Color) {
    this.color = color;
  }
}

export class Rook extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "rook";
  }
  validate(
    from: {y:number, x:number},
    to: {y:number, x:number},
    board: GameBoard
  ): boolean {return true}
}

export class Bishop extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "bishop";
  }
  validate(
    from: {y:number, x:number},
    to: {y:number, x:number},
    board: GameBoard
  ): boolean {return true}
}

export class King extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "king";
  }
  validate(
    from: {y:number, x:number},
    to: {y:number, x:number},
    board: GameBoard
  ): boolean {return true}
}

export class Queen extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "queen";
  }
  validate(
    from: {y:number, x:number},
    to: {y:number, x:number},
    board: GameBoard
  ): boolean {return true}
}

export class Knight extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "knight";
  }
  validate(
    from: {y:number, x:number},
    to: {y:number, x:number},
    board: GameBoard
  ): boolean {return true}
}

export class Pawn extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "pawn";
  }

  validate(
    from: {y:number, x:number},
    to: {y:number, x:number},
    board: GameBoard
  ): boolean {
    console.log("from:", from, "to:", to)
    const piece = board[from.y][from.x];
    const targetPiece = board[to.y][to.x];
    let alreadyMoved: boolean = false;
    let color: Color;
    let attemptToCapture: boolean = Boolean(to.x !== from.x && targetPiece !== null);
    if (!piece || piece.name !== this.name) {
      return false;
    }
    console.log("attemptToCapture", attemptToCapture, targetPiece)
    color = piece.color;
    if (
      (color === Color.black && from.y !== 1) ||
      (color === Color.white && from.y !== 6)
    ) {
      alreadyMoved = true;
    }
    if (color === Color.black) {
      
      if (to.y - from.y > 2) return false;
      if (
        targetPiece &&
        (targetPiece.color === color || targetPiece.name === "king")
      ) {
        return false;
      }
   
      if (
        attemptToCapture &&
        Math.abs(from.x - to.x) === 1 &&
        to.y - from.y === 1
      ) {
        return true;
      }
      console.log("here") 
      if (to.y - from.y === 1 && !attemptToCapture && from.x === to.x) return true;
      if (
        !alreadyMoved &&
        to.y === 3 &&
        !board[from.y + 1][from.x] &&
        !attemptToCapture
      )
        return true;
    }
    if (color === Color.white) {
    
      if (from.y - to.y > 2) return false;
      if (
        targetPiece !== null &&  
        (targetPiece.color === color || targetPiece.name === "king")
      ) {
        return false;
      }
     
      if (
        attemptToCapture &&
        Math.abs(from.x - to.x) === 1 &&
        from.y - to.y === 1 
      ) {
        return true;
      }
     
     
      if (from.y - to.y === 1 && !attemptToCapture && from.x === to.x) return true;
  
      if (
        !alreadyMoved &&
        to.y === 4 &&
        !board[from.y - 1][from.x] &&
        !attemptToCapture
      )
        return true;
    }
    return false;
  }
}

export interface ISquares {
  [name: string]: {
    color: Color;
    pieceAtStart: UnionPiece | null;
  };
}

export type GameBoard = (UnionPiece | null)[][];
