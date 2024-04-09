// fazer a importação do express
const express = require('express');

//rotas (quando os servidor for acessado , pra onde ele vai???
const router = express.Router();
router.get('/',(req,res)=>{
    // função anonima, sem nome
    res.send('Olá mundo 000000000000000000000000000000000000000000000000');
});

//Configurações básicas do aplicativ
/*
Vai pegar tudo daqui e gerar em um novo arquivo
 */
const app = express()
app.use('/', router)

module.exports = app // exportar para então importar