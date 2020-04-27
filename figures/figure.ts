import {Point} from "./point";

export class Figure {
    name: string;
    points: Point[];
    lines: number[];

    constructor(name, points: Point[]) {
        this.name = name;
        this.points = points;
        // this.lines = this.calculateLines()
    }

    private calculateLines() {
        if (this.points.length > 1) {
            this.points.reduce((prev, curent) => {
                    this.lines.push(this.getLine(prev, curent));
                    return curent
                }
            )
        }
        else{
            this.lines.push(0);
        }

    }

    getLine(p1: Point, p2: Point): number {
        return Math.abs(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)))
    }

    getPerimeter() {
        const perimeter = this.lines.reduce((prev,cur)=>prev+cur);
        console.log(`The ${this.name}'s perimeter is: ${perimeter}`);
    };

    getSquare() {
    };
}