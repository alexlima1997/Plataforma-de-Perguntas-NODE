import express from 'express';
import bodyParser from 'body-parser';
import { connection } from './database/database.js'
import perguntaModel from './database/Pergunta.js'

connection
  .authenticate()
  .then( () => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const port = 4001;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send(`Formulário recebido: ${titulo}, ${descricao}`);
});

app.listen(port, (err) => {
  if (err) {
    console.log('Ocorreu um erro!');
  } else {
    console.log('Servidor iniciado com sucesso.');
  }
});
