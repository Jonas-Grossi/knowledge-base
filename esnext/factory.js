function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1


    }


}

const novoProduto = criarProduto('sabao','2.99')

console.log(novoProduto)