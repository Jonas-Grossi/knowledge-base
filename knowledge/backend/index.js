//app recebe express
const app = require('express')()
//acessar dependecia sem precisar usar require
const consign = require('consign')
//variavel db requere config/db para acessar o banco postgree
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')
app.db = db
app.mongoose = mongoose


//consign carrega os arquivo em ordem
consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedule')
    .then('./config/routes.js')
    //injeta o app
    .into(app)



app.listen(3000, () => {
    console.log('Backend executando.....')
})

