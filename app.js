// let side = document.
// let max = 600 - side;
let container = document.getElementById('shape-container');
// define and add click listeners to shape buttons
let btnRectangle = document.getElementById('btn-rectangle');
btnRectangle.addEventListener('click', addShape);
let btnCircle = document.getElementById('btn-circle');
btnCircle.addEventListener('click', addShape);
let btnSquare = document.getElementById('btn-square');
btnSquare.addEventListener('click', addShape);
let btnTriangle = document.getElementById('btn-triangle');
btnTriangle.addEventListener('click', addShape);

function addShape() {
    let xVal = randomNum(0, max);
    let yVal = randomNum(0, max);
    console.log(xVal, yVal);
    let shape = new Shape(xVal, yVal);
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isNumberKey(evt){
    let charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        // document.querySelector('input').value = null;
        alert('please type a numeric value');
    return true;
}

class Shape {
    constructor(x, y) {
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
        this.div.style.backgroundColor = 'navy';
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
        this.div.style.backgroundColor = 'blueviolet';
    }
}

class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
        this.div.style.backgroundColor = 'gold';
    }
}

class Rectangle extends Shape {
    constructor(x, y, height, width) {
        super(x, y);
        this.div.style.backgroundColor = 'lightgreen';
    }
}

class Square extends Shape {
    constructor(x, y, side) {
        super(x, y);
        this.div.style.backgroundColor = 'tomato';
    }
}