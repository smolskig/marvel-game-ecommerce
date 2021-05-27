# E-commerce marvel games

> Aplicação de E-commerce dos jogos da marvel, desenvolvido em 1 semana utilizando Reactjs + Redux.

## Requisitos do sistema

### Funcionais
 + O cliente deve poder ter um cadastro na aplicação para realizar as compras
 + O sistema deve exibir uma lista dos produtos que podem ser comprados
 + O cliente deve poder adicionar produtos em um carrinho de compras
 + O cliente deve poder remover produtos do carrinho de compras
 + O cliente deve poder acrescentar e decrementar a quantidade de um produto
 + O cliente deve poder finalizar a compra e ir para uma tela de pagamento 
 
### Não-Funcionais

 + Os dados devem ser requisitados da api oficial da marvel
 + O sistema deve ter fácil navegação e possuir poucos sub-menus
 + A aplicação deve ser desenvolvida utilizando Reactjs + Redux
 + O sistema de login deve usar JWT para autênticação do usuário
 
## Requisitos escolhidos para o desenvolvimento do MVP

### Funcionais

 + O sistema deve exibir uma lista dos produtos que podem ser comprados 
  
  Esse requisito é necessário para que o cliente consiga escolher o produto a ser comprado.
  
 + O cliente deve poder adicionar produtos em um carrinho de compras
  
  Esse requisito é necessário para que o cliente possa comprar mais de um produto ao mesmo tempo.
  
 + O cliente deve poder remover produtos do carrinho de compras
 
  Esse requisito é necessario para que o cliente possa remover algum produto, se caso nao o desejar mais.
  
 + O cliente deve poder acrescentar e decrementar a quantidade de um produto
 
  Esse requisito é necessario para que o cliente possa aumentar ou diminuir a quantidade do mesmo produto dentro de uma compra.
  
 
 ### Não-Funcionais
 
 + Os dados devem ser requisitados da api oficial da marvel
 
  Esse requisito é necessário para que os produtos tenham sempre alta fidelidade descritiva com o produto real.
  
 + O sistema deve ter fácil navegação e possuir poucos sub-menus
 
  Esse requisito é necessário para a facil utilização e entendimento do sistema.
  
 + A aplicação deve ser desenvolvida utilizando Reactjs + Redux
 
  Esse requisito é necessário para que haja facilidade na manutenção e revisão do código.
  
 
# Overview da aplicação 
 
## 📱 Layout Mobile: 

<img src="https://user-images.githubusercontent.com/50807768/88953711-b5b59300-d26f-11ea-9402-894e88acda33.jpeg" alt="drawing" width="300"/>

## 💻 Layout Web:

<img src="https://user-images.githubusercontent.com/50807768/88953674-a6cee080-d26f-11ea-8e77-a3102486ec67.png" alt="drawing"/>

## Principais funcionalidades

![gif-demonstracao](https://user-images.githubusercontent.com/50807768/88954333-9ec37080-d270-11ea-8f78-b2729d56a447.gif)

Todas as funcionalidades do sistema foram construídas atraves do gerenciador de estado :

- **Sistema de carrinho de compras**

- **Sistema de Requisição e exibição dos jogos**

- **Sistema de filtragem dos jogos**

- **Controle de UI**

#### API'S utilizadas

Para requisitar os dados dos jogos utilizei esta API:

``` 
GET: https://www.marvel.com/v1/pagination/search_cards?limit=20&query=marvel&content_type=games
```

A API de dados consultada retorna apenas os nomes dos arquivos de imagem dos jogos, portanto tive que utilizar outra API oficial para requisitar as imagens.
``` 
URL: https://terrigen-cdn-dev.marvel.com/content/prod/1x/<nome_da_imagem>'
```

### Gerenciamento de estados
Para gerenciar os estados da aplicação, utilizei **Redux** + **Redux Toolkit** para facilitar a criação das estruturas de gerenciamento.

Estados necessarios para a aplicação :
 - **Cart**  
 
 Gerencia todas as funcionalidades do carrinho, adicionar produto, incrementar, decrementar e remover.
 
 - **Games** 
 
 Gerencia todas as funcionalidades dos jogos, requisitar dados, selecionar um jogo, filtrar os jogos.
 
 - **UI** 
 
 Gerencia todos os comportamentos da interface, exibir loading spinner, abrir e fechar modal dos jogos, abrir e fechar menu do carrinho.
 
 > Todos os estados se encontram na pasta Slices do projeto.
 
 ### Layout
 
 O Layout foi todo construido com CSS, visei criar uma interface **limpa**, **moderna** e principalmente **responsiva** !
 
 > Para prototipação da interface utilizei o app Figma 
 
 ![responsive](https://user-images.githubusercontent.com/50807768/88942554-d1656d00-d260-11ea-8a3f-e92ee21abb9f.gif)
 
 #### Bibliotecas de UI
 Utilizei duas bibliotecas externas para UI
  
  - react-icons
  
  Biblioteca que provê multiplos icones de diferentes estilos
  
  - react-loader-spinner
  
  Biblioteca que provê multiplos spinners de diferentes estilos
  
 ## Testes
 Para testar a aplicação utilizei a lib React Testing-library
 - Realizei apenas um teste para verificar se os jogos estavam sendo gerados em tela
 
 ## Análise de Performance
 Pontos de atenção em relação a performance da aplicação.
 
**Pré renderização em algumas telas**

Para uma aplicação deste tipo em larga escala, seria necessário ter um sistema de server-side-rendering para não prejudicar a utilização do sistema pelo usuário, evitando grandes telas de loading e agilizando a visualização do conteúdo.

**Code splitting**

Dividir código em micro-códigos ajudaria muito também no momento de processar toda a estrutura da aplicação.

**Lazy Loading**

Outra estratégia extremamente util para SPA's é o conceito de lazy loading, onde só são carregados os bundles necessários para o estado atual de utilização da aplicação.


### Instalação 
Clone o projeto e execute o comando:

```
$ npm install
```
Para executar o projeto execute o comando:

```
$ npm start
```

Para executar os testes execute o comando:

```
$ npm test
```
 
 
 
 
 
 
 
 


 
 
