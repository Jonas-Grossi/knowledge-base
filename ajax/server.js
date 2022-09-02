const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.use(express.static('.'))
//configuracao do badyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//funcao middleware
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {

        callback(null, './upload')
    },
    filename: function (req, file, callback) {

        callback(null, `${Date.now()}_${file.originalname}`)
    }

})
const upload = multer({ storage }).single('arquivo')
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')

        }
        res.end('Concluido com sucesso.')
    })

})
app.post('/formulario', (req, res) => {
//retornar os dados como resposta no frontend para colocar o resultado na caixinha
    res.send({
        ...req.body,
        id: 1
    })

})

app.get('/parOuImpar/',(req,res)=>{
// req.body
//req.query
//req.params
const par = parseInt(req.query.numero)% 2 === 0
res.send({
    resultado: par ? 'par' : 'impar'

})
})

app.listen(8081, () => console.log('Executando...'))
