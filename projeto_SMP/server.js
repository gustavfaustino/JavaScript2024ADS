const app = require('./app')

app.set('port',2312) // Usar uma porta livre, n utilizavel. 8080 n pode
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: "+ server.address().port)
})

