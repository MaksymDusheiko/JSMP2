import {Point} from "./point";
import {Figure} from "./figure";

export class Triangle extends Figure {
    constructor(points: Point[], name = 'Arbitrary triangle') {
        super(points, name);
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2]))
    };
}

export class Isosceles extends Triangle {
    constructor(points: Point[]) {
        super(points, 'Isosceles');
    }
}

export class Equilateral extends Triangle {
    constructor(points: Point[]) {
        super(points, 'Equilateral');
    }
}

export class Rectangular extends Triangle {
    constructor(points: Point[]) {
        super(points, 'Rectangular');
    }

}