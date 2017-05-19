"use strict";

(function (operations) {
	/**
	* Clase que calcula restas
	* @class Resta
	* @extends Operation
	* @param {number} izq Operando izquierdo
	* @param {number} dch Operando derecho
	*/
	operations['-'] = class Resta extends Operation {
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
} (operations = operations || {}));
