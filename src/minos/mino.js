let mino = class {
    constructor(board, boardArr) {
        this.board;
        this.boardArr;
        this.terminalKit = require('terminal-kit')
        // State
        this.isLanded = false // If the mino has landed
        this.collision = false // if the mino has hit something else
        this.mino; // Placeholder for mino
        this.orientation = 'up'
        this.term = this.terminalKit.terminal
        this.buf;

        this.x = 0// Math.floor(this.board.width / 2) // Spawn in the middle of the board
        this.y = 0
        this.jetrimino = require('../jetriminos').I
        
    }
    render() {
        // Movement!
        this.term.on('key', (name, matches, data) => {
            switch(name) {
                case 'a': this.x == 1 ? this.x = 1 : this.x -= 1; break; // Left
                case 'LEFT': this.x == 1 ? this.x = 1 : this.x -= 1; break;
                case 'd': this.x == term.width - 1 ? this.x = term.width - 1 : this.x += 1; break; // Right
                case 'RIGHT': this.x == term.width - 1 ? this.x = term.width - 1 : this.x += 1; break;
            }
        })
        // Init the buffer
        this.buf = new this.terminalKit.ScreenBuffer( { dst: this.board, width: this.term.width, height: this.term.height, tile: true} )
    }
    update() { // Looped
        // check for a collision
        this.y++
        this.checkCollision()

        if (this.collision) {
            this.isLanded = true
        } else {
            this.y++
        }
        this.buf.put({x: this.x, y: this.y, markup: false, attr: {color: this.color}, newLine: true}, this.jetrimino.up.jetriminos())
        this.buf.draw({blending: true})
    }
    checkCollision() {
        console.log(this.boardArr[this.y + 1][this.x])
        /*if (block) { // If the block is occupied
            return this.collision = true // The mino has landed!
        } else {
            return this.collision = false // Keep on fallin...
        }*/
    }
}
module.exports = mino