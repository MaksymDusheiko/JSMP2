import {Point} from "./point";

export class Figure {
    name: string;
    points: Point[];
    sides: number[];

    constructor(points: Point[], name) {
        this.name = name;
        this.points = points;
        this.calculateSides();
    }

    getType() {
        return this.name
    }

    getLine(p1: Point, p2: Point): number {
        return Math.abs(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)))
    }

    getPerimeter(): number {
        return this.sides.reduce((prev, cur) => prev + cur);
    };

    getArea() {
    };

    private calculateSides() {
        const sides = [];
        if (this.points.length > 1) {
            this.points.reduce((prev, current, index) => {
                    sides[index - 1] = this.getLine(prev, current);
                    return current
                }
            )
        } else {
            sides.push(0);
        }
        this.sides = sides;

    }
}