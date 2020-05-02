// let side = document.
let min
let max = 600
let container = document.getElementById('shape-container');

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
        this.div.classList.add('shape');
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
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
        this.div.classList.add('circle');
        this.radius = parseInt(radius);
        let diameter = this.radius * 2;
        this.div.style.height = `${diameter}px`;
        this.div.style.width = `${diameter}px`;
    }
}

class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
        this.div.classList.add('triangle');
        this.height = parseInt(height);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.height}px`;
    }
}

class Rectangle extends Shape {
    constructor(x, y, height, width) {
        super(x, y);
        this.div.classList.add('rectangle');
        this.height = parseInt(height);
        this.width = parseInt(width);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
    }
}

class Square extends Shape {
    constructor(x, y, side) {
        super(x, y);
        this.div.classList.add('square');
        this.side = parseInt(side);
        this.div.style.height = `${this.side}px`;
        this.div.style.width = `${this.side}px`;
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

function addCircle() {
    radius = document.getElementById('radius').value;
    console.log(radius);
    let diameter = 2 * parseInt(radius);
    xVal = randomNum(0, 500);
    yVal = randomNum(0, 500);
    console.log(xVal, yVal);
    let square = new Circle(xVal, yVal, diameter);
}

function addRectangle() {
    height = document.getElementById('recHeight').value;
    width = document.getElementById('recWidth').value;
    console.log(height, width);
    xVal = randomNum(0, 500);
    yVal = randomNum(0, 500);
    console.log(xVal, yVal);
    let rectangle = new Rectangle(xVal, yVal, height, width);
}

function addTriangle() {
    height = document.getElementById('triHeight').value;
    console.log(height, width);
    xVal = randomNum(0, 500);
    yVal = randomNum(0, 500);
    console.log(xVal, yVal);
    let triangle = new Triangle(xVal, yVal, height);
}


// define and add click listeners to shape buttons
let btnRectangle = document.getElementById('btn-rectangle');
btnRectangle.addEventListener('click', addRectangle);
let btnCircle = document.getElementById('btn-circle');
btnCircle.addEventListener('click', addCircle);
let btnSquare = document.getElementById('btn-square');
btnSquare.addEventListener('click', addSquare);
let btnTriangle = document.getElementById('btn-triangle');
btnTriangle.addEventListener('click', addTriangle);