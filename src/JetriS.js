let boardArr = [
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

const terminalKit = require('terminal-kit')

let game = class {
    constuctor() {
        this.occupiedBlocks = boardArr
        this.score = 0

        // board
        this.board;

        // game state
        this.width = boardArr[0].length
        this.state = {
            isRunning: true,
            gameOver: false,
            isPaused: false
        }
        this.activeTiles = []
        
    }
    init() {
        this.term = terminalKit.terminal
        this.buf;
        this.board() // Create the game board
    }
    board() {
        this.b = new terminalKit.ScreenBuffer( { dst: this.term, width: this.width, height: this.term.height} )
        this.b.put({x: 0, y: 0, markup: false, attr: {color: 'white'}, newLine: true}, boardArr.jetriminos())
        //this.board.draw()
    }
    update() {
        let mino = require('./minos/I')
        let minos = require('./jetriminos')
        let currMino = new mino(this.b, boardArr)
        //currMino.render()
        let y = 0

        y++

        this.buf = new terminalKit.ScreenBuffer( { dst: this.b, width: this.width, height: this.term.height} )
        this.buf.clear()
        // TODO: Code that adds the current mino to `buf`
        //this.buf.put({x: 5, y, markup: false, attr: {color: currMino.color}, newLine: true}, minos.I.up.jetriminos()/*currMino.render()*/)
       // this.buf.draw({blending: true})
        currMino.update()
        this.b.draw()
       
    }
    clear() {
        this.b.clear()
        this.buf.clear()
    }
}
module.exports = game