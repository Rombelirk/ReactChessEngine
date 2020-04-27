import {
  ISquares,
  Color,
  Rook,
  Bishop,
  Pawn,
  Queen,
  King,
  Knight,
} from "./types";

const squares: ISquares = {
  a1: {
    color: Color.black,
    pieceAtStart: new Rook(Color.white),
  },
  b1: {
    color: Color.white,
    pieceAtStart: new Knight(Color.white),
  },
  c1: {
    color: Color.black,
    pieceAtStart: new Bishop(Color.white),
  },
  d1: {
    color: Color.white,
    pieceAtStart: new Queen(Color.white),
  },
  e1: {
    color: Color.black,
    pieceAtStart: new King(Color.white),
  },
  f1: {
    color: Color.white,
    pieceAtStart: new Bishop(Color.white),
  },
  g1: {
    color: Color.black,
    pieceAtStart: new Knight(Color.white),
  },
  h1: {
    color: Color.white,
    pieceAtStart: new Rook(Color.white),
  },
  a2: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.white),
  },
  b2: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.white),
  },
  c2: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.white),
  },
  d2: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.white),
  },
  e2: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.white),
  },
  f2: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.white),
  },
  g2: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.white),
  },
  h2: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.white),
  },
  a3: {
    color: Color.black,
    pieceAtStart: null,
  },
  b3: {
    color: Color.white,
    pieceAtStart: null,
  },
  c3: {
    color: Color.black,
    pieceAtStart: null,
  },
  d3: {
    color: Color.white,
    pieceAtStart: null,
  },
  e3: {
    color: Color.black,
    pieceAtStart: null,
  },
  f3: {
    color: Color.white,
    pieceAtStart: null,
  },
  g3: {
    color: Color.black,
    pieceAtStart: null,
  },
  h3: {
    color: Color.white,
    pieceAtStart: null,
  },
  a4: {
    color: Color.white,
    pieceAtStart: null,
  },
  b4: {
    color: Color.black,
    pieceAtStart: null,
  },
  c4: {
    color: Color.white,
    pieceAtStart: null,
  },
  d4: {
    color: Color.black,
    pieceAtStart: null,
  },
  e4: {
    color: Color.white,
    pieceAtStart: null,
  },
  f4: {
    color: Color.black,
    pieceAtStart: null,
  },
  g4: {
    color: Color.white,
    pieceAtStart: null,
  },
  h4: {
    color: Color.black,
    pieceAtStart: null,
  },
  a5: {
    color: Color.black,
    pieceAtStart: null,
  },
  b5: {
    color: Color.white,
    pieceAtStart: null,
  },
  c5: {
    color: Color.black,
    pieceAtStart: null,
  },
  d5: {
    color: Color.white,
    pieceAtStart: null,
  },
  e5: {
    color: Color.black,
    pieceAtStart: null,
  },
  f5: {
    color: Color.white,
    pieceAtStart: null,
  },
  g5: {
    color: Color.black,
    pieceAtStart: null,
  },
  h5: {
    color: Color.white,
    pieceAtStart: null,
  },
  a6: {
    color: Color.white,
    pieceAtStart: null,
  },
  b6: {
    color: Color.black,
    pieceAtStart: null,
  },
  c6: {
    color: Color.white,
    pieceAtStart: null,
  },
  d6: {
    color: Color.black,
    pieceAtStart: null,
  },
  e6: {
    color: Color.white,
    pieceAtStart: null,
  },
  f6: {
    color: Color.black,
    pieceAtStart: null,
  },
  g6: {
    color: Color.white,
    pieceAtStart: null,
  },
  h6: {
    color: Color.black,
    pieceAtStart: null,
  },
  a7: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.black),
  },
  b7: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.black),
  },
  c7: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.black),
  },
  d7: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.black),
  },
  e7: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.black),
  },
  f7: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.black),
  },
  g7: {
    color: Color.black,
    pieceAtStart: new Pawn(Color.black),
  },
  h7: {
    color: Color.white,
    pieceAtStart: new Pawn(Color.black),
  },
  a8: {
    color: Color.white,
    pieceAtStart: new Rook(Color.black),
  },
  b8: {
    color: Color.black,
    pieceAtStart: new Knight(Color.black),
  },
  c8: {
    color: Color.white,
    pieceAtStart: new Bishop(Color.black),
  },
  d8: {
    color: Color.black,
    pieceAtStart: new Queen(Color.black),
  },
  e8: {
    color: Color.white,
    pieceAtStart: new King(Color.black),
  },
  f8: {
    color: Color.black,
    pieceAtStart: new Bishop(Color.black),
  },
  g8: {
    color: Color.white,
    pieceAtStart: new Knight(Color.black),
  },
  h8: {
    color: Color.black,
    pieceAtStart: new Rook(Color.black),
  },
};

export default squares;
