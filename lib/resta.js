"use strict";

var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation");

(function (operations) {
	/**
	* Clase que calcula restas
	* @class Resta
	* @extends Operation
	* @param {number} izq Operando izquierdo
	* @param {number} dch Operando derecho
	*/
	module.exports = operations['-'] = class Resta extends Operation {
		/**
		* Constructor de la clase Operation
		* @param {number} izq Operando izquierdo
		* @param {number} dch Operando derecho
		*/
		constructor (izq, dch) {
			super(izq, dch);
		}
		
		/**
		* Función que devuelve el resultado de la resta
		* @function calculate
		*/
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
