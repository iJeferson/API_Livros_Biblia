# Livros da Bíblia

Esta é uma API RESTful simples, construída com o framework Express em Node.js, que permite interagir com um banco de dados de livros da Bíblia. A API possui duas rotas principais:

- **GET /livros**: Retorna todos os livros da Bíblia em formato JSON. Se houver um erro na busca, retorna um status 500 com uma mensagem de erro.

- **GET /livros/:nome**: Permite buscar um livro específico pelo seu nome. Se encontrado, retorna os detalhes do livro em formato JSON; caso contrário, retorna um status 404 com uma mensagem informando que o livro não foi encontrado.

A API utiliza Sequelize como ORM para facilitar a interação com o banco de dados e trata erros de forma a fornecer feedback apropriado em caso de falhas.

## Pré-requisitos

Antes de executar a API, verifique se você atende aos seguintes requisitos:

**Node.js**:  
Certifique-se de que o Node.js está instalado. Você pode baixá-lo [aqui](https://nodejs.org/).

**Gerenciador de Pacotes (npm ou yarn)**:  
O npm é geralmente instalado junto com o Node.js. Alternativamente, você pode usar o yarn para gerenciar as dependências do projeto.

**Dependências**:  
As seguintes dependências são necessárias:
- **Express**: Framework para construir o servidor.
- **Sequelize**: ORM para interagir com o banco de dados.
- **mysql2**: Driver para conectar ao banco de dados MySQL.

**Banco de Dados**:  
Um banco de dados deve estar configurado (MySQL) com a tabela `Livros_Biblia` criada e populada com dados.

**Configuração do Banco de Dados**:  
As credenciais e configurações do banco de dados devem estar corretamente definidas no arquivo de configuração do Sequelize.

Certifique-se de atender a todos esses pré-requisitos antes de executar a API.

## Clonar o Repositório

Para clonar o repositório da API, utilize o seguinte comando:

```bash
git clone https://github.com/iJeferson/API_Livros_Biblia
