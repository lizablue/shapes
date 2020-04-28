let btnRectangle = document.getElementById('btn-rectangle');
btnRectangle.addEventListener('click', addShape);
let btnCircle = document.getElementById('btn-circle');
btnCircle.addEventListener('click', addShape);
let btnSquare = document.getElementById('btn-square');
btnSquare.addEventListener('click', addShape);
let btnTriangle = document.getElementById('btn-triangle');
btnTriangle.addEventListener('click', addShape);

function addShape() {
    alert('clicked');
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Shape {
    constructor() {

        this.div.addEventListener("click", () => this.describe());
        this.div.addEventListener("dblclick", () => this.remove());
    }

    describe() {

    }

    remove() {
        section.removeChild(this.div);
        let divIndex = diceArray.indexOf(this.div);
        diceArray.splice(divIndex, 1);
    }
}

class Circle extends Shape {
    constructor(radius) {
        
    }
}

class Triangle extends Shape {
    constructor(height) {
        
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        
    }
}

class Square extends Shape {
    constructor(side) {
        
    }
}