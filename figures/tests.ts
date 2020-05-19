import {Figure} from "./figure";
import {data} from "./data";
import {getFigure} from "./factory";

const assert = require('assert');

const circle = getFigure(data.circleData.points, data.circleData.radius);
assert.strictEqual(circle.getType(), "Circle");
assert.strictEqual(circle.getArea(), 157.08);
assert.strictEqual(circle.getPerimeter(), 62.83);
//
const square = getFigure(data.rectangles.square.points);
assert.strictEqual(square.getType(), "Square");
assert.strictEqual(square.getArea(), 25);
assert.strictEqual(square.getPerimeter(), 20);

const diamond = getFigure(data.rectangles.diamond.points);
assert.strictEqual(diamond.getType(), "Diamond");
assert.strictEqual(diamond.getArea(), 14);
assert.strictEqual(diamond.getPerimeter(), 16.16);

const arbTrngl = getFigure(data.triangles.arbitrary.points);
assert.strictEqual(arbTrngl.getType(), "Arbitrary triangle");
assert.strictEqual(arbTrngl.getArea(), 4);
assert.strictEqual(arbTrngl.getPerimeter(), 11.12);

// assert.strictEqual(getFigure(data.triangles.equilateral.points).getType(),"Equilateral"); // no idea how to create by coordinates

const isoTrngl = getFigure(data.triangles.isosceles.points);
assert.strictEqual(isoTrngl.getType(), "Isosceles");
assert.strictEqual(isoTrngl.getArea(), 8);
assert.strictEqual(isoTrngl.getPerimeter(), 12.94);

const rectTrngl = getFigure(data.triangles.rectangular.points);
assert.strictEqual(rectTrngl.getType(), "Rectangular");
assert.strictEqual(rectTrngl.getArea(), 4);
assert.strictEqual(rectTrngl.getPerimeter(), 10.47);

try {
    assert.ok(new Figure(data.triangles.rectangular.points, "abstract figure"));
} catch (err) {
    assert.strictEqual(err.message, `You are not allowed to create an abstract class`)
}
