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
    constructor() {
        this.occupiedBlocks = boardArr
        this.term = terminalKit.terminal
        this.score = 0
        this.loop = 0
        let mino = require('./minos/I')
        this.currMino = new mino(this.b, boardArr, this.term)

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
        this.buf;
        this.board() // Create the game board
    }
    board() {
        this.b = new terminalKit.ScreenBuffer( { dst: this.term, width: this.width, height: this.term.height} )
        this.b.put({x: 0, y: 0, markup: false, attr: {color: 'white'}, newLine: true}, boardArr.jetriminos())
        this.currMino.render()
    }
    update() {
        //currMino.render()

        //this.buf = new terminalKit.ScreenBuffer( { dst: this.b, width: this.width, height: this.term.height} )
        //this.buf.clear()
        // TODO: Code that adds the current mino to `buf`
        //this.buf.put({x: 5, y: 0, markup: false, attr: {color: currMino.color}, newLine: true}, minos.I.up.jetriminos()/*currMino.render()*/)
       // this.buf.draw({blending: true})
        this.currMino.update()
        this.b.draw()
    }
    clear() {
        this.b.clear()
        //this.buf.clear()
    }
}
module.exports = game