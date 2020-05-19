import {Point} from "./point";

export class Figure {
    name: string;
    points: Point[];
    sides: number[];

    constructor(points: Point[], name) {
        if (this.constructor === Figure) {
            throw new Error(`You are not allowed to create an abstract class`)
        }
        this.name = name;
        this.points = points;
        this.calculateSides();
        console.log(`${this.name} created`)
    }

    getType() {
        return this.name
    }

    getLine(p1: Point, p2: Point): number {
        return Math.abs(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)))
    }

    getPerimeter(): number {
        return +this.sides.reduce((prev, cur) => prev + cur).toFixed(2);
    };

    getArea() {
    };

    private calculateSides() {
        const sides = [];
        if (this.points.length > 1) {
            this.points.reduce((prev, current, index) => {
                    sides[index] = +this.getLine(prev, current).toFixed(2);
                    return current
                }
                , this.points[this.points.length - 1])
        } else {
            sides.push(0);
        }
        this.sides = sides;

    }
}