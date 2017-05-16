"use strict";

var chai = require("chai");
var assert = chai.assert;
var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation");
var Resta = require("../index.js");

describe('resta', function() {
	it('2-3', function() {
		var result = Operation.operate("2-3");
		assert.equal(result, -1);
	});
	it('2e2-3', function() {
		var result = Operation.operate("2e2-3");
		assert.equal(result, 197);
	});
});
