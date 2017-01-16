const expect = require('chai').expect;
const tictactoe = require('./app.js')

describe('Tic Tac Toe', function(){
  describe('Board', function(){
    it('should be a function', function(){
        expect(tictactoe.board).to.be.a('function');
    });
    it('should create an array of arrays', function(){
        expect(tictactoe.board()).to.be.an('array');
        expect(tictactoe.board()[0]).to.be.an('array');
    });
    it('should create a 3 x 3', function(){
        let newBoard = tictactoe.board();
        expect(tictactoe.board().length).to.equal(3);
       
        let rowsAllThree = true;
        newBoard.forEach(function(x){
            if (x.length !== 3) rowsAllThree = false; 
        });
        expect(rowsAllThree).to.be.true;
    });
    it('should be blank', function(){
        let newBoard = tictactoe.board();
        
    });
  });
});