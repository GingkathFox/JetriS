#!/usr/bin/env node
let minos = require('./src/jetriminos')
const supportsColor = require('supports-color')
let colors = require('colors')
const cliCanvas = require("cli-canvas")
const terminalKit = require('terminal-kit')
let lodash = require('lodash')
let term = terminalKit.terminal
let ctx = new cliCanvas.Context()

let board = require('./src/JetriS')
 
// Set window title
term.windowTitle('JetriS')

// Prototype functions
Array.prototype.jetriminos = function() {
    let s = ''
    this.forEach((element) => {
        element.forEach((v) => {
            if (v == 0) {
                s += ' '//'░'
            } else if (v == 1) {
                s += '█' // '▀'
            }
        })
        s += '\n'
    })
    return s
}
Object.prototype.randoMino = function() {
    let r = Math.floor(Math.random() * Object.keys(this).length)
    let o = Object.values(Object.entries(this)[r])
    return lodash.merge(o[0], o[1])
}
Object.prototype.randomRot = function() {
    let o = Object.values(Object.entries(this))
    let r = Math.floor(Math.random() * 3)
    let e;

    switch(r) {
        case 0: e = o[1]; break;
        case 1: e = o[2]; break;
        case 2: e = o[3]; break;
        case 3: e = o[4]; break; 
    }
    return e[1]
}

/*if (supportsColor.stdout) {
    console.log('Terminal stdout supports color')
}
 
if (supportsColor.stdout.has256) {
    console.log('Terminal stdout supports 256 colors')
}
 
if (supportsColor.stderr.has16m) {
    console.log('Terminal stderr supports 16 million colors (truecolor)')
}*/



async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis))
}
let y = 0
let x = 1

term.on('key', (name, matches, data) => {
    switch(name) {
        case 'q': 
            term.grabInput(false)
            game.clear()
            term.clear()
            console.log('Exiting.')
            process.exit(9)
            break;
    }
})
let game = new board(term)
game.init()
process.on('SIGINT', () => {
    term.grabInput(false)
    term.clear()
    process.exit(9)
})
term.grabInput(true)

let loop = setInterval(() => {
    game.update()
}, 200)

/*ctx.begin()
ctx.style.line = "M"
ctx.rect(0, 0, 20, 17)
ctx.on('resize', (e) => {
    console.log(e)
})
ctx.end()*/