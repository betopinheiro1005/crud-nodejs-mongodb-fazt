const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

/* connection to db */

// mongoose.connect('mongodb://localhost/crud-mongo')
mongoose.connect('mongodb+srv://betopinheiro1005:angstron1005@cluster-nodejs-mongodb-ulvuw.mongodb.net/crud-mongo?retryWrites=true&w=majority')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));


/* Importing routes */ 

const indexRoutes = require('./routes/index');


/* settings */

// configurando a porta do servidor
app.set('port', process.env.PORT || 3000);

// configurando o diretório de views
app.set('views', path.join(__dirname, 'views'));

// definindo o motor de templates
app.set('view engine', 'ejs');


/* middlewares */

app.use(morgan('dev'));

// para entender os dados que vem de um formulário
app.use(express.urlencoded({extended: false}));


/* routes */

app.use('/', indexRoutes);


/* starting the server */

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
