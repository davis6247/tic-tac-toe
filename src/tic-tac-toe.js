class TicTacToe {
    constructor() {
        this.field = new Array(3);
        for(var i = 0; i < 3; i++){
            this.field[i] = new Array(3);
        }
        this.CurrentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {     

        if(this.field[rowIndex][columnIndex] == undefined){
            this.field[rowIndex][columnIndex]  = this.CurrentPlayerSymbol;
            this.CurrentPlayerSymbol = this.CurrentPlayerSymbol == 'x' ? 'o' : 'x'; 
        }
    }

    isFinished() {
        if(this.isDraw() || this.getWinner()) return true;

        return false;
    }

    getWinner() {
        var winner;
        for(var i = 0; i < 3; i++){
            if(this.field[i][0] == this.field[i][1] && this.field[i][1] == this.field[i][2]){
                winner =  this.field[i][0];
                break;
            }

            else if(this.field[0][i] == this.field[1][i] && this.field[1][i] == this.field[2][i]){
                winner =  this.field[0][i];
                break;
            }
        }
        
        if(this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2])
            winner = this.field[0][0];
        
        else if(this.field[2][0] == this.field[1][1] && this.field[1][1] == this.field[0][2])
            winner = this.field[2][0];

        if(winner == undefined) return null;

        return winner;
    }

    noMoreTurns() {
        for(var i = 0; i < this.field.length; i++){
            for(var j = 0; j < this.field[i].length; j++){
                if(this.field[i][j] == undefined) return false;
            }
        }

        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()) return true;

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.field[rowIndex][colIndex] != undefined) return this.field[rowIndex][colIndex];

        return null;
    }
}     

module.exports = TicTacToe;
