import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Para acceder al directorio actual
import path from 'path';

const app = express(); 

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises 
mongoose.connect(uri, options).then( 
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
    () => { 
        console.log('Conectado a DB') 
    }, 
    /** handle initial connection error */ 
    err => { console.log(err) } 
);

//Middleware (Antes de la ruta)
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

//Ruta
//app.get('/', function (req, res) { 
//    res.send('Hello World!'); 
//}); 

app.use('/api', require('./routes/nota'));

//Puerto Estatico
//app.listen(3000, function () { 
//    console.log('El servidor escucha por el puerto 3000!'); 
//});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Puerto Dinamico
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
console.log('Example app listening on port'+ app.get('puerto'));
});