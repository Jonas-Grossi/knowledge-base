//com promise...

const { rejects } = require('assert')
const http = require('http')
const { resolve } = require('path')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {

    http.get(url, resp => {
        let resultado = ''
        resp.on('data', dados => {
            resultado += dados

        })
        resp.on('end', () => {
            try {
                resolve(JSON.parse(resultado))
            } catch (e) {
                reject(e)
            }
        })
    })
})
   }



Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))


    getTurma('D').catch(e=>console.log(e.message))


//Recurso do ES8
//Objetivo de simplificar o uso de promises...
let obterAlunos = async()=>{
const ta = await getTurma('A')
const tb = await getTurma('B')
const tc = await getTurma('C')
return [].concat(ta,tb,tc)

}//retorna um objeto AsyncFunction

obterAlunos()
.then(alunos=>alunos.map(a=>a.nome))
.then(nomes=>console.log(nomes))