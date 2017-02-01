'use strict'

import config from "./config.js";
import Pagseguro from "./pagseguro.js";

const pagseguro = new Pagseguro(config);

pagseguro.login()
	.then( logged => {
		pagseguro.saque()
			.then( () => {
				console.log('Saque realizado');
				process.exit();

			})
			.catch( () => {
				console.log('Saque não realizado');
				process.exit();
			})
	})