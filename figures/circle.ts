import {Point} from "./point";
import {Figure} from "./figure";

export class Circle extends Figure {
    radius: number;

    constructor(points: Point[], radius: number) {
        super(points, "Circle");
        this.radius = radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    };

    getArea() {
        return (Math.PI * Math.pow(this.radius, 2)) / 2;
    };
}