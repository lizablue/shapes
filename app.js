// let side = document.
let min
let max = 600 - min;
let container = document.getElementById('shape-container');

function addShape() {
    let xVal = randomNum(0, 500);
    let yVal = randomNum(0, 500);
    console.log(xVal, yVal);
    let shape = new Shape(xVal, yVal);
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        // document.querySelector('input').value = null;
        alert('make sure you only use numbers');
    return true;
}

class Shape {
    constructor(x, y) {
        this.div = document.createElement('div');
        // this.div.classList.add('shape');
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
        // this.div.style.backgroundColor = 'navy';
        container.appendChild(this.div);

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
    constructor(x, y, radius) {
        super(x, y);
    }
}

class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
    }
}

class Rectangle extends Shape {
    constructor(x, y, height, width) {
        super(x, y);
    }
}

class Square extends Shape {
    constructor(x, y, side) {
        super(x, y);
        this.div.classList.add('square');
        this.side = parseInt(side);
        this.div.style.height = `${this.side}px`;
        this.div.style.width = `${this.side}px`;
        this.updateColor();
        // let sqDiv = document.createElement('div');
        // this.sqDiv.addSquare();
    }

    updateColor() {
        let newColor = `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`;
        this.div.style.background = newColor;
    }
}

function addSquare() {
    side = document.getElementById('sqSide').value;
    console.log(side);
    xVal = randomNum(0, 500);
    yVal = randomNum(0, 500);
    console.log(xVal, yVal);
    let square = new Square(xVal, yVal, side);
}
// define and add click listeners to shape buttons
let btnRectangle = document.getElementById('btn-rectangle');
btnRectangle.addEventListener('click', addShape);
let btnCircle = document.getElementById('btn-circle');
btnCircle.addEventListener('click', addShape);
let btnSquare = document.getElementById('btn-square');
btnSquare.addEventListener('click', addSquare);
let btnTriangle = document.getElementById('btn-triangle');
btnTriangle.addEventListener('click', addShape);