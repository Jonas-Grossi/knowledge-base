 Array.prototype.map2 = function (callback) {
    const newArray=[]   
    for (let i = 0; i < this.length; i++) {
         newArray.push(callback(this[i], i, this))
        }
        return newArray
    }



const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Kit de Lapis","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}'

]
/*let array1=[]
//Retornar um array com apenas os preços

  carrinho.map(function(e){
      //array1 = `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
       let elemento = JSON.parse(e)
       array1 = `R$ ${parseFloat(elemento.preco).toFixed(2).replace('.',',')}`
      // console.log(array1)
})
console.log(array1)
*/

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto =>produto.preco
const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
console.log(resultado)