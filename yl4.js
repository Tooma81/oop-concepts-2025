class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    getArea() {

    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    print() {
        return `Circle (r: ${this.radius}, color: ${this.color})`;
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    getArea() {
        return Math.pow(this.side, 2);
    }

    print() {
        return `Square (a: ${this.side}, color: ${this.color})`;
    }
}

class Rectangle extends Shape {
    constructor(color, lenght, width) {
        super(color);
        this.lenght = lenght;
        this.width = width;
    }

    getArea() {
        return this.lenght * this.width;
    }

    print() {
        return `Rectangle (l: ${this.lenght}, w: ${this.width} color: ${this.color})`;
    }
}

class Paint {
    constructor(...shapes) {
        this.shapes = shapes;
    }
    
    addShape(shape) {
        this.shapes.push(shape);
    }

    getShapes() {
        return this.shapes
    }

    calculateTotalArea() {
        let total = 0;
        for(let shape of this.shapes) {
            total += shape.getArea();
        }
        return total;
    }

    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square)
    }

    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle)
    }

    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle)
    }

}

let shape1 = new Shape("red");
console.log(shape1.color)  //red

let circle1 = new Circle("green", 2);
console.log(circle1.getArea())  //12.566370614359172
console.log(circle1.print())  //Circle (r: 2, color: green)

let square1 = new Square("purple", 4);
console.log(square1.getArea())  //16
console.log(square1.print())  //Square (a: 4, color: purple)

let rectangle1 = new Rectangle("blue", 5, 2);
console.log(rectangle1.getArea())  //10
console.log(rectangle1.print())  //Rectangle (l: 5, w: 2 color: blue)

let shapes1 = new Paint(circle1, square1, rectangle1)
console.log(shapes1.getShapes())
//[
//    Circle { color: 'green', radius: 2 },
//    Square { color: 'purple', side: 4 },
//    Rectangle { color: 'blue', lenght: 5, width: 2 }
//]

let square2 = new Square("yellow", 3)
shapes1.addShape(square1)
console.log(shapes1.getShapes())
//[
//    Circle { color: 'green', radius: 2 },
//    Square { color: 'purple', side: 4 },
//    Rectangle { color: 'blue', lenght: 5, width: 2 },
//    Square { color: 'purple', side: 4 }
//]

console.log(shapes1.calculateTotalArea())  //54.56637061435917

console.log(shapes1.getSquares())
//[
//    Square { color: 'purple', side: 4 },
//    Square { color: 'purple', side: 4 }
//]
