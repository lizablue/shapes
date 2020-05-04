
let container = document.getElementById('shape-container');
let shapeInfo = document.getElementById('shape-info');
let shapeHeight = document.getElementById('shape-height');
let shapeWidth = document.getElementById('shape-width');
let shapeArea = document.getElementById('shape-area');
let shapePerimeter = document.getElementById('shape-perimeter');
let shapeRadius = document.getElementById('shape-radius');

// generates random numbers for a random location
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// formats the side panel numbers to have a comma if greater than 1,000
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// alerts that only numbers are accepted in the shape inputs
function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        // document.querySelector('input').value = null;
        alert('make sure you only use numbers');
    return true;
}

// parent class
class Shape {
    constructor(x, y) {
        this.div = document.createElement('div');
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
        container.appendChild(this.div);

        this.div.addEventListener("click", () => this.describe());
        this.div.addEventListener("dblclick", () => this.remove());
    }

    describe() {
        let cName = this.div.classList.value;
        let shapeInfo = document.getElementById('shape-info');
        shapeInfo.value = cName;
    }

    remove() {
        container.removeChild(this.div);
        shapeInfo.value = '';
        shapeHeight.value = '';
        shapeWidth.value = '';
        shapeArea.value = '';
        shapePerimeter.value = '';
        shapeRadius.value = '';
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

    describe() {
        let cName = this.div.classList.value;
        shapeInfo.value = cName;
        shapeHeight.value = diameter;
        shapeWidth.value = diameter;
        let circleArea = Math.PI * this.radius ** 2;
        shapeArea.value = formatNumber(circleArea.toFixed(0));
        let circlePerimeter = 2 * Math.PI * this.radius;
        shapePerimeter.value = formatNumber(circlePerimeter.toFixed(0));
        shapeRadius.value = this.radius;
    }
}

class Triangle extends Shape {
    constructor(x, y, height) {
        super(x, y);
        this.div.classList.add('triangle');
        this.height = parseInt(height);
        this.div.style.borderWidth = `${this.height}px 0 0 ${this.height}px`;
    }

    describe() {
        let cName = this.div.classList.value;
        shapeInfo.value = cName;
        shapeHeight.value = this.height;
        shapeWidth.value = this.height;
        let triArea = .5 * this.height ** 2;
        shapeArea.value = formatNumber(triArea.toFixed(0));
        let triPerimeter = 2 * this.height + Math.sqrt(2) * this.height
        shapePerimeter.value = formatNumber(triPerimeter.toFixed(0));
        shapeRadius.value = 'N/A';
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

    describe() {
        let cName = this.div.classList.value;
        shapeInfo.value = cName;
        shapeHeight.value = this.height;
        shapeWidth.value = this.width;
        let recArea = this.width * this.height;
        shapeArea.value = formatNumber(recArea.toFixed(0));
        let recPerimeter = 2 * this.height + 2 * this.width
        shapePerimeter.value = formatNumber(recPerimeter.toFixed(0));
        shapeRadius.value = 'N/A';
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

    describe() {
        let cName = this.div.classList.value;
        shapeInfo.value = cName;
        shapeHeight.value = this.side;
        shapeWidth.value = this.side;
        let sqArea = this.side ** 2;
        shapeArea.value = formatNumber(sqArea.toFixed(0));
        let sqPerimeter = 4 * this.side;
        shapePerimeter.value = formatNumber(sqPerimeter.toFixed(0));
        shapeRadius.value = 'N/A';
    }
}

// add each shape in a random location with the size determined by the inputs
function addSquare() {
    side = document.getElementById('sqSide').value;
    if (side > 600 || side < 1) {
        alert('enter a value from 1 - 600')
    } else {
        max = 600 - side
        xVal = randomNum(0, max);
        yVal = randomNum(0, max);
        let square = new Square(xVal, yVal, side);
    }
}

function addCircle() {
    radius = document.getElementById('radius').value;
    diameter = 2 * parseInt(radius);
    if (radius > 300 || radius < 1) {
        alert('enter a value from 1 - 300')
    } else {
        max = 600 - diameter
        xVal = randomNum(0, max);
        yVal = randomNum(0, max);
        let circle = new Circle(xVal, yVal, radius);
    }
}

function addRectangle() {
    height = document.getElementById('recHeight').value;
    width = document.getElementById('recWidth').value;
    if (height > 600 || height < 1 || width > 600 || width < 1) {
        alert('enter a value from 1 - 600')
    } else {
        maxH = 600 - height
        maxW = 600 - width
        xVal = randomNum(0, maxW);
        yVal = randomNum(0, maxH);
        let rectangle = new Rectangle(xVal, yVal, height, width);
    }
}

function addTriangle() {
    height = document.getElementById('triHeight').value;
    if (height > 600 || height < 1) {
        alert('enter a value from 1 - 600')
    } else {
        max = 600 - height
        xVal = randomNum(0, max);
        yVal = randomNum(0, max);
        let triangle = new Triangle(xVal, yVal, height);
    }
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

// button to capture an image of your div
let btnCapture = document.getElementById('btn-capture');
btnCapture.addEventListener('click', function() {
    html2canvas(container).then(function(canvas) {
        // Export the canvas to its data URI representation
        var base64image = canvas.toDataURL("image/png");
    
        // Open the image in a new window
        window.open(base64image , "_blank");
    });
});