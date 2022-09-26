Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
/*let i
function getAprovados(nome, indice) {
    console.log(`${indice + 1})${nome}`)
}
for (i = 0; i < aprovados.length; i++) {
  getAprovados(aprovados[i], i)
}*/
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
