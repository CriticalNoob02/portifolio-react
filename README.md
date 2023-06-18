[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

# Projeto ✨
 Projeto de portifólio construido e atualizado com ferramentas e ideias que desenvolvi durante meus estudos.

 - Utilizando um arquitetura de microsserviços orientada a eventos, onde o frontend recebe dados tratados pelas APIs ;
 - Utiliza um design patterns [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para facilitar a compreensão dos commits ;
 - Utiliza o microsserviço de [apiGithu](https://github.com/CriticalNoob02/ApiGithub) como fonte dos dados relacionados ao perfil ;
 
 # Construção 🚧
 - Foi utilizado [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) como linguagem principal da aplicação frontend ;
 - Foi utilizado [React.js](https://react.dev/) como Framework ;
 - Foi utilizado a biblioteca [Charts.js](https://www.chartjs.org/) para a criação dos gráficos ;
 - Foi utilizado [Sass](https://sass-lang.com/) para a estilização da página ;
 - Foi utilizado [Docker](https://docs.docker.com/) para a configuração do ambiente de desenvolvimento, facilitando a integração entre os microsserviços ;
 - Foi utilizado o [Yarn](https://yarnpkg.com/) como gerenciador de pacotes ; 

# Execução ▶️ 

Primeiramente é nescessário configurar a [API](https://github.com/CriticalNoob02/ApiGithub) e iniciar a mesma para que o projeto seja alimentado com a informação correta. 

Existem duas formas de iniciar o projeto;

1 - Caso você tenha o Docker-compose configurado na sua maquina, insira no terminal o seguinte comando para criar um container com a imagem atualizada do projeto
```
docker-compose up
```
após isso, digite o seguinte comando para subir o container
```
docker-compose start
```

2 - Caso você não possua o Docker-compose configurado, insira o seguinte comando no terminal para instalar todas as dependências do projeto
```
yarn
```
Após instalar as dependências você deve iniciar o projeto localmente digite o seguinte comando para  subir o projeto de forma local
```
yarn run dev --host 0.0.0.0
```

> Obs: Lembre de manter o projeto apontando para a porta das APIs

# Testes 🦾

Ainda não inclui os testes de componentes e unitários dentro do projeto...