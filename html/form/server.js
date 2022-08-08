//importa o express
const express = require('express')
//instancia o express
const app = express()
//import bodyparser

const bodyParser = require('body-parser')
//uma vez que submeta os dados do formulario
//faz um parser no corpo da requisicao(bodyparser),faz um parser no corpo request e jogar esses dados em req.body
//urlencoded é padrao
app.use(bodyParser.urlencoded({ extended: true }))
//requisicao e resposta
app.post('/usuarios', (req, resp) => {
    //saber o que chegou na requisicao
    console.log(req.body)
    //resposta
    resp.send('<h1>Parabéns usuario incluido<h1>')
})



app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns usuario alterado<h1>')
})



//escutar a porta
app.listen(3003)