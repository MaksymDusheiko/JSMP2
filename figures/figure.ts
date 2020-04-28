import {Point} from "./point";

export class Figure {
    name: string;
    points: Point[];
    sides: number[];

    constructor(name, points: Point[]) {
        this.name = name;
        this.points = points;
        this.calculateSides()
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
        if (this.points.length > 1) {
            this.points.reduce((prev, curent) => {
                    this.sides.push(this.getLine(prev, curent));
                    return curent
                }
            )
        } else {
            this.sides.push(0);
        }

    }
}