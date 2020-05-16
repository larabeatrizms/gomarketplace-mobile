<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.gyazo.com/f095a484fa4d52b98d40ba9f9432659d.gif" alt="Desafio fundamentos Node.js"></a>
</p>

<h3 align="center">App GoMarketplace</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/larabeatrizms/gomarketplace-mobile">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/larabeatrizms/gomarketplace-mobile">

  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/larabeatrizms/gomarketplace-mobile">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/larabeatrizms/gomarketplace-mobile">

</div>

---

<p align="center">
    "Mantenha-se maratonando conhecimentos!" by me
    <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Testes](#tests)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

Projeto criado para estudar e praticar os fundamentos de React Native, junto com TypeScript, utilizando rotas, Async Storage e a Context API. Utilizando uma fake API como backend da aplicação.

### 🚀 Sobre o GoMarktplace

É uma aplicação simples listando produtos e utilizando a Context API para adicionar e retirar os produtos no carrinho.

Meu bônus é ter feito um Switch para Dark Mode da aplicação, a lógica foi construída utilizando Context API.

### Layout da aplicação

O layout pode ser acessado através da página do Figma, no [seguinte link](https://www.figma.com/file/VgK3hsmyGbqiGu9FdqfUzF/GoMarketplace?node-id=0%3A1).

## 🏁 Iniciando <a name = "getting_started"></a>

### Funcionalidades da Aplicação

- **`Listar os produtos da fake API`**
- **`Adicionar itens ao carrinho`**
- **`Exibir itens do carrinho`**:
- **`Aumentar quantidade de itens do carrinho`**:
- **`Diminuir quantidade de um item do carrinho`**:
- **`Exibir valor total dos itens no carrinho`**:

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências

```sh
yarn install
```

ou

```sh
npm install
```

### Utilizando uma fake API

Para que você tenha os dados para exibir na tela, tem um arquivo que pode ser utilizado como fake API para prover dados.

Para isso, foi deixado instalado no package.json uma dependência chamada `json-server`, e um arquivo chamado `server.json` que contém os dados para uma rota `/products`. Para executar esse servidor você pode executar o seguinte comando:

```js
  yarn json-server server.json -p 3333
```

## 🔧 Executando os testes <a name = "tests"></a>

```sh
yarn test
```

### Sobre os testes

- **`should be able to list the products`**
- **`should be able to add a product to the cart`**
- **`should be able to list the products on the cart`**
- **`should be able to calculate the cart total`**
- **`should be able to show the total quantity of itens in the cart`**
- **`should be able to increment product quantity on the cart`**
- **`should be able to decrement product quantity on the cart`**
- **`should be able to navigate to the cart`**
- **`should be able to add products to the cart`**
- **`should be able to increment quantity`**
- **`should be able to decrement quantity`**
- **`should store products in AsyncStorage while adding, incrementing and decrementing`**
- **`should load products from AsyncStorage`**

## 🎈 Uso <a name="usage"></a>

```sh
yarn start
```

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)

## ✍️ Authors <a name = "authors"></a>

👤 **Lara Beatriz**

- Twitter: [@LaraBeatrizMS](https://twitter.com/LaraBeatrizMS)
- Github: [@larabeatrizms](https://github.com/larabeatrizms)
- LinkedIn: [@larabeatrizms](https://linkedin.com/in/larabeatrizms)
