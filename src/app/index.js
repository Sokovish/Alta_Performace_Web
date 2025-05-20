import express from 'express';
import path from 'path';
import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';
import { PrismaClient } from '../../generated/prisma/index.js';

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


app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'html', 'autenticacao', 'login.html'));
});

app.post('/usuarios', async (req, res) => {
  const { nome, sobrenome, idade, CPF, email, senha, telefone } = req.body;
  console.log('Dados recebidos:', req.body);

  const idadeInt = parseInt(idade, 10);

  const telefoneBigInt = BigInt(telefone);

  try { 
   
    const senhaHash= await bcrypt.hash(senha,10)
    const usuario = await prisma.usuario.create({
      data: { nome, sobrenome, idade: idadeInt, CPF, email,senha : senhaHash, telefone: telefoneBigInt }
    });

    

    res.redirect('/login');
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao cadastrar usuário', detalhes: err.message });
  }
});

app.get('/recuperarsenha', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'html', 'autenticacao', 'recuperar_senha.html'));
});

app.post('/recuperarsenha', async (req, res) => {
  try {
    const { email, nova_senha, confirmar_senha } = req.body;

    
    if (nova_senha !== confirmar_senha) {
      return res.status(400).send('A senha e sua confirmação não coincidem.');
    }

    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).send('E‑mail não cadastrado.');
    }

    
    const senhaHash = await bcrypt.hash(nova_senha, 10);
    await prisma.usuario.update({
      where: { id: user.id },
      data: { senha: senhaHash },
    });

    
    return res.redirect('/login');
  } catch (error) {
    console.error('Erro ao redefinir senha:', error);
    return res.status(500).send('Erro ao redefinir senha.');
  }
});





app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
