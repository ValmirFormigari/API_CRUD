// index.js
require('dotenv').config(); // Carrega variáveis de ambiente PRIMEIRO
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

// Inicializa o Express App
const app = express();

// Middlewares Essenciais
app.use(cors()); // Habilita CORS para permitir requisições do frontend
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Rota Raiz (opcional, para teste)
app.get('/', (req, res) => {
  res.send('API CRUD Usuários com Firebase está rodando!');
});

// Monta as rotas de usuário sob o prefixo /usuarios
app.use('/usuarios', userRoutes);

// Middleware de tratamento de erro básico (exemplo)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Algo deu errado!');
// });

// Define a porta a partir do .env ou usa 3001 como padrão
const PORT = process.env.PORT || 3001;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`URL base da API: ${process.env.API_BASE_URL || `http://localhost:${PORT}`}`);
});