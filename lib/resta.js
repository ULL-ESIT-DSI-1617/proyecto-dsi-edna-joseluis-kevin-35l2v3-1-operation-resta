"use strict";

var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation").Operation;
var operations = require("@ull-edna-joseluis-kevin-35l2/ull-operation").operations;

(function (operations) {
	module.exports = operations['-'] = class Resta extends Operation {
		constructor (izq, dch) {
			super(izq, dch);
		}
		
		calculate () {
			return (this.izq_ - this.dch_).toFixed(2);
		}
	}
	if (operations.symbols){
		operations.symbols += '-';
	}
	else{
		operations.symbols = '-';
	}
} (global.operations = global.operations || {}));
