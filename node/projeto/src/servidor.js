const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')
//qualquer requisao express no servidor vai passar por esse midware dados no formato unlencoded 
//sera feito um parser e transformado em objeto
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))

})
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//CONVERTE O OBJETO EM JSON PARA WEB
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id:req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//CONVERTE O OBJETO EM JSON PARA WEB
})
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    
    res.send(produto)//CONVERTE O OBJETO EM JSON PARA WEB
})


app.listen(porta, () => {

    console.log(`Servidor executando na porta ${porta}.`)

})