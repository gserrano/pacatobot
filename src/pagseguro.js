let Nightmare = require('nightmare'),
	nightmare = Nightmare({
		show: false,
		waitTimeout: 45000,
		typeInterval: 700
	});

class Pagseguro {
	constructor(config) {
		this.user = config.auth.user;
		this.password = config.auth.password;
	}

	login(){
		return new Promise((resolve, reject) => {
			nightmare
			.goto('https://pagseguro.uol.com.br')
			.insert('#eml', this.user)
			.insert('#pwd', this.password)
			.click('#entrar')
			.wait('#accountBalance')
			.then(() => {
				resolve(this);
			})
			.catch( error => {
				reject(error)
			});
		});
	}

	saque(){

		return new Promise((resolve, reject) => {
			
			nightmare
				.goto('https://pagseguro.uol.com.br/operations/viewWithdraw.jhtml')
				.click('input[name=selectedAccount]')
				.evaluate(function () {
					let val = document.querySelector('#accountBalance').innerHTML.replace('R$ ', '');
					document.querySelector('#value-input').value = val;
					return val;
				})
				.then( (money) => {
					console.log(`Seu saldo é R$ ${money}`);

					if( parseFloat(money) <= 0){
						console.error('Nada para sacar :(');
						reject();
						return;
					}

					nightmare
						.click('#view_btnSubmit')
						.wait('#solicitar')
						.click('button.pagseguro-button[type=submit]')
						.wait('.uolMsg-success')
						.end()
						.catch(function (error) {
							console.error('Solicitação falhou:', error);
							reject();
						});

				})
				.catch(function (error) {
					console.error('Pegar saldo falhou:', error);
				});
		});
	}


}

module.exports = Pagseguro;
