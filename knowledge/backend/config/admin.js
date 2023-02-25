//modulo para verficiar se o usuario é admin
module.exports = middleware => {
    //como é um middleware este possui requisição,resposta e proximo
    return (req, res, next) => {
        //verifica se o admin esta setado
        if(req.user.admin) {
            //chama o proximo middleware
            middleware(req, res, next)
        } else {
            //retorna erro
            res.status(401).send('Usuário não é administrador.')
        }
    }
}