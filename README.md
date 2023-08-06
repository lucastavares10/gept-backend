<h1 align="center">
  GEPT - BackEnd
  <br>
</h1>

<p align="center">
    <a alt="NPM">
        <img src="https://img.shields.io/badge/npm-v6+-red.svg" />
    </a>
    <a alt="NodeJs">
        <img src="https://img.shields.io/badge/NodeJs-v16+-greenlight.svg" />
    </a>
    <a alt="TypeScript">
        <img src="https://img.shields.io/badge/TypeScript-v3.9-blue.svg" />
    </a>
    <a alt="TypeORM">
        <img src="https://img.shields.io/badge/TypeORM-v0.3-brown.svg">
    </a>
        <a alt="Jest">
        <img src="https://img.shields.io/badge/Jest-brown.svg">
    </a>
    <a alt="PostgreSQL">
        <img src="https://img.shields.io/badge/PostgreSQL-blue.svg">
    </a>
    <a alt="ExpressJs">
        <img src="https://img.shields.io/badge/ExpressJs-v4.17-greendark.svg">
    </a>
    <a alt="SocketIO">
        <img src="https://img.shields.io/badge/SocketIO-v4-bluedark.svg" />
    </a>
</p>

## Índice

1. [Descrição do projeto](#Descrição-projeto)
2. [Diagrama de entidade e relacionamento](#Diagrama-ERD)
3. [Tecnologias](#Tecnologias)
4. [Design Patterns e Metodologias](#Design-patterns)
5. [Metodologias](#Metodologias)
6. [Instruções de uso](#Instruções-de-uso)

## Descrição do projeto

...

## Diagrama de entidade e relacionamento

  <img src="./.github/images/GEPT - ERD.png" alt="Diagrama-ERD">

## Tecnologias

Principais ferramentas e tecnologias utilizadas no projeto:

- **npm** - Gerenciador de dependências
- **TypeScript** - Linguagem de programação
- **NodeJS** - Interpretador JavaScript/TypeScript
- **ExpressJS** - Framework para API em NodeJS
- **PostgreSQL** - Banco de dados relacional
- **TypeORM** - ORM para Typescript
- **Jest** - Framework para testes
- **Docker** - Framework de conteinerização
- **Yup** - Biblioteca de validação de esquemas
- **ESLint** - Ferramenta de padronização de códigos
- **Prettier** - Formatador de códigos

## Design Patterns e Metodologias

- **Clean Architecture**
- **SOLID**
- **Factory**
- **Dependency Injection**
- **Keep It Simple, Silly (KISS)**

## Instruções de uso

**1. Clonar repositório**

**2. Build e start usando docker**

- Serão criados dois containers, postgres-db e gept-backend

```bash
docker-compose build
docker-compose up -d
```

**3. Start usando npm**

- Necessário uma conexão com o PostgreSQL, configurar no .env do projeto antes de executar

```bash
npm install
npm start
```

Aplicação estará disponível em <http://localhost:4000>.

**4. Testes com Jest**

```bash
npm run test
```

## Contribuidores

[Lucas Tavares](https://www.linkedin.com/in/lucas-tavares-a25323116/)
