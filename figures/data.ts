import {Point} from "./point";

export const data = {

    circleData: {
        points: [new Point(5, 5, 'a')],
        radius: 10,
    },

    triangles: {
        isosceles: {
            points: [
                new Point(5, 5, 'a'),
                new Point(1, 3, 'b'),
                new Point(1, 7, 'c'),
            ]
        },
        equilateral: null,
        rectangular: {
            points: [
                new Point(5, 5, 'a'),
                new Point(1, 5, 'b'),
                new Point(1, 7, 'c'),
            ]
        },
        arbitrary: {
            points: [
                new Point(5, 4, 'a'),
                new Point(1, 5, 'b'),
                new Point(1, 7, 'c'),
            ]
        },
    },

    rectangles: {
        square: {
            points: [
                new Point(5, 5, 'a'),
                new Point(5, 10, 'b'),
                new Point(0, 10, 'c'),
                new Point(0, 5, 'd'),
            ],
        },
        diamond: {
            points: [
                new Point(5, 1, 'a'),
                new Point(8, 3, 'b'),
                new Point(5, 5, 'c'),
                new Point(1, 3, 'd'),
            ],
        }
    },
};