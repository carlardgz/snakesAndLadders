class Dice {
    throw() {
        return Math.floor(Math.random() * 6 + 1);
    }
}


class Board {
    constructor() {
        this.vector = new Array(100);

        for (let i = 0; i <= 20; i++) {
            this.vector[i] = 0;

            //Snakes
            this.vector[10] = -3; 
            this.vector[16] = -4;
            this.vector[29] = -4;
            this.vector[36] = -4;
            this.vector[50] = -1;
            this.vector[64] = -7;
            this.vector[72] = -5;
            this.vector[81] = -2;
            this.vector[88] = -6;
            this.vector[95] = -9;

            //Ladders
            this.vector[4] = 9; 
            this.vector[19] = 5;
            this.vector[33] = 6;
            this.vector[48] = 9;
            this.vector[55] = 3;
            this.vector[62] = 8;
            this.vector[69] = 4;
            this.vector[77] = 8;
            this.vector[80] = 7;
            this.vector[91] = 2;

        }
    }

    snakeOrLadder(position) {
        return this.vector[position];
    }
}

class Token {
    constructor() {
        this._position = 0;
    }

    diceRoll(dice, board) {
        let diceRoll1 = dice.throw();
        this._position += diceRoll1;

        let boardAdvance = board.snakeOrLadder(this._position);

        if (boardAdvance > 0) {
            console.log("Move forward.");
        } else if (boardAdvance < 0) {
            console.log("Move backwards.");
            this._position += boardAdvance;
        }  
    }
}


class Game {
    constructor() {
        this._dice = new Dice();
        this._board = new Board();
        this._token1 = new Token();
        this._token2 = new Token();
    }

    toPlay() {

        do {
            this._token1.diceRoll(this._dice, this._board);
            this._token2.diceRoll(this._dice, this._board);

            console.log("Token 1 moves to " + this._token1._position + " and Token 2 moves to " + this._token2._position);
        } while (this._token1._position < 100 && this._token2._position <100);

        if (this._token1._position > this._token2._position) {
            console.log("Token 1 wins.");
        } else {
            console.log("Token 2 wins");
        }
    }
}

let round1 = new Game();
round1.toPlay()