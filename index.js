import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


var loginPage = fs.readFileSync(__dirname + '/view/html/login.html', 'utf8')

app.use('/utils', express.static(path.join(__dirname, '/utils')));
app.use('/css', express.static(path.join(__dirname, '/view/css')));
app.use('/html', express.static(path.join(__dirname, '/view/html')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '/view/html/login.html'));
});



function checkLoginInJson(user, password) {
  const data = fs.readFileSync(__dirname + '/logins.json', 'utf8');
  const jsonData = JSON.parse(data);
  return jsonData.some(item => item.usuario === user && item.senha === password);
}


app.post('/login', (req, res) => {
  const { usuario, senha } = req.body;
  if (checkLoginInJson(usuario, senha)) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
