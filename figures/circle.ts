import {Point} from "./point";
import {Figure} from "./figure";

class Circle extends Figure {
    radius: number;

    constructor(name, points: Point[], radius: number) {
        super(name, points);
        this.radius = radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    };

    getArea() {
        return (Math.PI * Math.pow(this.radius, 2)) / 2;
    };
}