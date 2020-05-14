const assert = require('assert');
import {data} from "./data";
import {getFigure} from "./fabrique";

assert.strictEqual(getFigure(data.circleData.points,data.circleData.radius).getType(),"Circle");
//
assert.strictEqual(getFigure(data.rectangles.square.points).getType(),"Square");
assert.strictEqual(getFigure(data.rectangles.diamond.points).getType(),"Diamond");
//
assert.strictEqual(getFigure(data.triangles.arbitrary.points).getType(),"Arbitrary triangle");
// assert.strictEqual(getFigure(data.triangles.equilateral.points).getType(),"Equilateral");
assert.strictEqual(getFigure(data.triangles.isosceles.points).getType(),"Isosceles");
assert.strictEqual(getFigure(data.triangles.rectangular.points).getType(),"Rectangular");