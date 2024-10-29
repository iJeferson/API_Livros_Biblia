const express = require('express');
const app = express();
const { livrosBiblia } = require('./src/models');

// Rota para buscar todos os livros da Bíblia
app.get('/livros', async (req, res) => {
  try {
    // Busca todos os registros no modelo livrosBiblia
    const livros = await livrosBiblia.findAll();
    
    // Formata os dados como JSON
    const resultado = livros.map(livro => livro.toJSON());

    // Retorna o resultado como resposta
    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar livros' });
  }
});

// Rota para buscar um livro pelo nome
app.get('/livros/:nome', async (req, res) => {
  const { nome } = req.params; // Captura o nome da URL

  try {
    // Busca o livro pelo nome
    const livro = await livrosBiblia.findOne({ where: { nome } });

    if (livro) {
      // Retorna o livro como JSON se encontrado
      res.json(livro.toJSON());
    } else {
      // Retorna 404 se o livro não for encontrado
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar o livro' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/livros');
});
