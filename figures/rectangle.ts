import {Point} from "./point";
import {Figure} from "./figure";

class Quadrangle extends Figure {

}

class Rectangle extends Quadrangle {

    getArea() {
        const sides = [...this.sides].sort((a, b) => a - b);
        return sides[0] * sides[3];
    };
}


export class Square extends Rectangle {

    constructor(points: Point[]) {
        super( points,"Square");
    }

    getArea() {
        return Math.pow(this.sides[0], 2);
    };
}

export class Diamond extends Quadrangle {

    constructor(points: Point[]) {
        super( points,"Diamond");
    }

    getArea() {
        const d1 = this.getLine(this.points[0], this.points[2]);
        const d2 = this.getLine(this.points[1], this.points[3]);
        return (d1 * d2) / 2;
    };
}