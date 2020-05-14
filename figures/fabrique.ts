import {data} from "./data";



import {Point} from "./point";
import {Circle} from "./circle";
import {Equilateral, Isosceles, Rectangular, Triangle} from "./triangle";
import {Diamond, Square} from "./rectangle";

export const getFigure = (points: Point[], radius?) => {
    if (radius) {
        return new Circle(points, radius)
    } else if (points.length === 3) {
        const a = getLine(points[0], points[1]);
        const b = getLine(points[1], points[2]);
        const c = getLine(points[2], points[0]);
        const sides = [a, b, c].sort(function (a, b) {
            return b - a
        }); // sides[0] - is hypotenuse

        if (a === b && b === c) {
            return new Equilateral(points)
        } else if (a === b || b === c || c === a) {
            return new Isosceles(points)
        } else if (+(sides[0] ** 2).toFixed(2) == +(sides[1] ** 2).toFixed(2) + +(sides[2] ** 2).toFixed(2)) {
            return new Rectangular(points)
        } else {
            return new Triangle(points)
        }

    } else if (points.length === 4) {  // assuming that side length is correct
        const d1 = getLine(points[0], points[2]);
        const d2 = getLine(points[1], points[3]);
        if (d1 ===d2){
            return  new Square(points)
        }
        else{
            return new Diamond(points)
        }

    } else {
        throw new Error("Figure not recognized, check number of points ")
    }

};
const getLine = (p1: Point, p2: Point): number => {
    return Math.abs(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)))
};


// ------- tests--------






