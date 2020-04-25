

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
    constructor() {

    }
}

class Triangle extends Shape {
    constructor() {
        
    }
}

class Rectangle extends Shape {
    constructor() {
        
    }
}

class Square extends Shape {
    constructor() {
        
    }
}