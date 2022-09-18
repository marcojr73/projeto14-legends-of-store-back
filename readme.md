
# Legends of Store API

<p align="center">
   <img width=350 src="https://raw.githubusercontent.com/marcojr73/projeto14-legends-of-store-front/main/src/assets/images/logo.jpeg"/>
</p>

- Esta é uma aplicação inspirada no jogo League of Legends
- Você pode fazer o login com o seu email, selecionar um campeão e comprar os seus itens

- [Veja meu deploy na heroku aqui](https://legends-of-store-api.herokuapp.com/)
- [Veja meu repositório front end desta aplicação aqui](https://github.com/marcojr73/projeto14-legends-of-store-front)

***

## Como usar

Instale meu projeto e configure o .env como no exemplo

```bash
  git clone git@github.com:marcojr73/projeto14-legends-of-store-back.git
```

```bash
  npm i
  
  npm run dev
```

***

##	 Tecnologias e Conceitos

- Node.js
- Express
- layered architecture
- Criptografia de senhas
- Geração de token com uuid
- Mongo Db

***
    
## API Reference

#### Sign-up

```
  POST /sign-up
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`username` | `string` |
| `body` |`email` | `string` |
| `body` |`password` | `string` |
| `body` |`confirmPassword` | `string` |

#### sign-in

```
  POST /sign-in
```
| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `body` |`email` | `string` |
| `body` |`password` | `string` |
| `body` |`champion*` | `string` |
champion must be a image url

#### List champions

```
  GET /champions
```

#### list items

```
  GET /items
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `header` |`token` | `Authorization` |

#### Insert an new purchase

```
  POST /purchase
```

| sent by |Parameter | Type     |             
| :-------- |:-------- | :------- | 
| `header` |`token` | `Authorization` |
| `body` |`bag` | `string` |


