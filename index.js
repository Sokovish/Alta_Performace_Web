import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PrismaClient } from './generated/prisma/index.js'; 

BigInt.prototype.toJSON = function() {
  return this.toString();
};

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
  const { nome, sobrenome, idade, cpf, email, telefone } = req.body;
  console.log('Dados recebidos:', req.body);

  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        sobrenome,
        idade: Number(idade), 
        cpf,             
        email,
        telefone: Number(telefone)
      }
    });
    res.redirect('/login');
   
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao cadastrar usuário', detalhes: err.message });
  }
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'html', 'autenticacao', 'login.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
