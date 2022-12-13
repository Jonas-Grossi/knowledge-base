const express = require('express')

const app = express()

app.use('/opa',(req, res) => {
    res.json({
        data:[
       { name: 'Ipad 32GB'},
        {price: 1899},
        {discount: 0.12}
    
],
    count:30,
    skip:0,
    limit:3,
    status:200
    //res.send('Estou <b>Bem</b>!!')

})
})
app.use("/opa",(req,res)=>{
    console.log("Será que serei chamado?")
})



app.listen(3000, () => {

    console.log("Backend Executando....")

})