import express from 'express';
import bodyParser from 'body-parser';
import { connection } from './database/database.js'
import Pergunta from './database/Pergunta.js'
import Resposta from './database/Resposta.js'

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
    Pergunta.findAll({ raw: true, order:[
      ['id', 'DESC']
    ]}).then(perguntas => {
      res.render('index', {
        perguntas: perguntas
      });
    })
    
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;

  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/');
  }); 
});

app.get('/pergunta/:id', (req, res) => {
  let id = req.params.id;
  Pergunta.findOne({
    where: {id: id}
  }).then(pergunta => {
    if (pergunta) {
      res.render('pergunta', {
        pergunta: pergunta
      });
    }else {
      res.redirect('/');
    }
  })
});

app.listen(port, (err) => {
  if (err) {
    console.log('Ocorreu um erro!');
  } else {
    console.log('Servidor iniciado com sucesso.');
  }
});
