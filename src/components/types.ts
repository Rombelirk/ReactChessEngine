export enum Color {
  black="black",
  white="white",
}

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
  
}

export class Bishop extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "bishop";
  }
 
}

export class King extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "king";
  }
}

export class Queen extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "queen";
  }
}

export class Knight extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "knight";
  }

}

export class Pawn extends Piece {
  constructor(color: Color) {
    super(color);
    this.name = "pawn";
  }

}

export interface ISquares {
  [name: string]: {
    color: Color;
    pieceAtStart: Piece | null;
  };
}
