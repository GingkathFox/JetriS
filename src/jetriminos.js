let oJ = [
    [0,0,0,0],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
]
let jetriminos = {
    "L": {
         up: [
            [0,1,0],
            [0,1,0],
            [0,1,1]
        ],
        right: [
            [0,0,0],
            [1,1,1],
            [1,0,0]
        ],
        down: [
            [1,1,0],
            [0,1,0],
            [0,1,0]
        ],
        left: [
            [0,0,1],
            [1,1,1],
            [0,0,0]
        ],
        color: 'purple',
        name: 'L'
    },
    "J": {
        up: [
            [0,1,0],
            [0,1,0],
            [1,1,0],
        ],
        right: [
            [1,0,0],
            [1,1,1],
            [0,0,0],
        ],
        down: [
            [0,1,1],
            [0,1,0],
            [0,1,0],
        ],
        left: [
            [0,0,0],
            [1,1,1],
            [0,0,1],
        ],
        color: 'orange',
        name: 'J'
    },
    "T": {
        up: [
            [0,0,0],
            [1,1,1],
            [0,1,0],
        ],
        right: [
            [0,1,0],
            [1,1,0],
            [0,1,0]
        ],
        down: [
            [0,1,0],
            [1,1,1],
            [0,0,0]
        ],
        left: [
            [0,1,0],
            [0,1,1],
            [0,1,0]
        ],
        color: 'yellow',
        name: 'T'
    },
    "S": {
        up: [
            [0,1,1],
            [1,1,0],
            [0,0,0]
        ],
        right: [
            [0,1,0],
            [0,1,1],
            [0,0,1]
        ],
        down: [
            [0,0,0],
            [0,1,1],
            [1,1,0]
        ],
        left: [
            [1,0,0],
            [1,1,0],
            [0,1,0]
        ],
        color: 'green',
        name: 'S'
    },
    "Z": {
        up: [
            [1,1,0],
            [0,1,1],
            [0,0,0]
        ],
        right: [
            [0,0,1],
            [0,1,1],
            [0,1,0]
        ],
        down: [
            [0,0,0],
            [1,1,0],
            [0,1,1]
        ],
        left: [
            [0,1,0],
            [1,1,0],
            [1,0,0]
        ],
        color: 'red',
        name: 'Z'
    },
    "I": {
        up: [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0]
        ],
        right: [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]  
        ],
        down: [
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0]
        ],
        left: [
            [0,0,0,0],
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0]
        ],
        color: 'cyan',
        name: 'I'
    },
    "O": {
        up: oJ,
        right: oJ,
        down: oJ,
        left: oJ,
        color: 'blue',
        name: 'O'
    }
}
module.exports = jetriminos