import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from './generated/prisma/index.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/view', express.static(path.join(__dirname, 'view')));

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'html', 'autenticacao', 'cadastro.html'));
});

app.post('/usuarios', async (req, res) => {
  const { nome, sobrenome, idade, CPF, email, telefone } = req.body;
  console.log('Dados recebidos:', req.body);

  try {
    const usuario = await prisma.usuario.create({
      data: { nome, sobrenome, idade, CPF, email, telefone }
    });
    res.status(201).json(usuario);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao cadastrar usuário', detalhes: err.message });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
