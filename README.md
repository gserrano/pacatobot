# PacatoBot

Pacatobot é um microbot que usa NodeJs (Nightmare) para śolicitar automaticamente saques da sua conta no PagSeguro.

![Pacatobot](https://gserrano.github.io/assets/imgs/pacatobot.gif)

Para utilizar:

- Faça clone do repositório
- Instale as dependências com 
```sh
$ npm install
```
- Ajuste as configurações de acesso da sua conta PagSeguro em /lib/config.js
- Compile
```sh
$ npm run build
```
- Solicitar o saque e automatize esta rotina como for mais conveniente
```sh
$ npm run app
```
ou
```sh
$ node src/app.js
```

