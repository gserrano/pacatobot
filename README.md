# PacatoBot

Pacatobot é um microbot que usa NodeJs (Nightmare) para solicitar automaticamente saques da sua conta no PagSeguro.

![Pacatobot](https://gserrano.github.io/assets/imgs/pacatobot.gif)


Para utilizar:

- Faça clone do repositório
- Instale as dependências com 
```sh
$ npm install
```
<<<<<<< HEAD
- Ajuste as configurações de acesso da sua conta PagSeguro em /lib/config.js
=======
- Ajuste as configurações de acesso da sua conta PagSeguro em /src/config.js
>>>>>>> ec3682b2a1a762878f53d8ec906c93276e4d302d
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
<<<<<<< HEAD
$ node lib/app.js
```
=======
$ node src/app.js
```

>>>>>>> ec3682b2a1a762878f53d8ec906c93276e4d302d
