'use strict'

import config from "./config.js";
import Pagseguro from "./pagseguro.js";

const pagseguro = new Pagseguro(config);

const sacar = function(provider) {
	console.log('Verificando saldo');
	provider
	.saque()
	.then( () => {
		console.log('Saque realizado');
	})
	.catch( error => {
		console.warn('Saque não realizado');
	})
}

console.log('Efetuando login')
pagseguro
.login()
.then(sacar)
.then( process.exit )
.catch( err => {
	console.error('Login failed:', err)
	process.exit()
})