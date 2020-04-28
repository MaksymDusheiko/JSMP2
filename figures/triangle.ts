import {Point} from "./point";
import {Figure} from "./figure";

class Triangle extends Figure {

    getArea() {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2]))
    };
}


class Isosceles extends Triangle {
    constructor(points: Point[]) {
        super('Isosceles', points);
    }
}

class Equilateral extends Triangle {
    constructor(points: Point[]) {
        super('Isosceles', points);
    }

}

class Rectangular extends Triangle {
    constructor(points: Point[]) {
        super('Isosceles', points);
    }

}