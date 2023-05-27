import express from 'express';

const app = express();

const port = 4001;

app.get('/', (req, res) => {
    res.send('Bem vindo ao guia de Node!');
});

app.listen(port, (err) => {
  if (err) {
    console.log('Ocorreu um erro!');
  } else {
    console.log('Servidor iniciado com sucesso.');
  }
});
