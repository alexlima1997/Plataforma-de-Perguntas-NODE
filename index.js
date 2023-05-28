import express from 'express';

const app = express();

const port = 4001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, (err) => {
  if (err) {
    console.log('Ocorreu um erro!');
  } else {
    console.log('Servidor iniciado com sucesso.');
  }
});
