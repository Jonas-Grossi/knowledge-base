//instanciando bcrypt para encriptar a senha 
const bcrypt = require('bcrypt-nodejs')
//exportando para app
module.exports = app => {

    //instanciando as funcoes de validation para uso
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    //encriptando o password e gerando hash
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    //salvar no banco os dados recebidos do front requisicao e resposta
    //save também é usado para alteração
    const save = async (req, res) => {
        //user recebe o corpo do post com os dados para requisicao
        const user = { ...req.body }
        //se tem req.params.id  user vai receber o id passado no post
        if (req.params.id) user.id = req.params.id

        if (!req.originalUrl.startsWith('/users')) user.admin = false
        if (!req.user || !req.user.admin) user.admin = false
        //verificação de erros de dados passado pelo usuario
        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            //constante para receber os dados de usuarios do banco
            //db é a forma para acessar o knex
            const userFromDB = await app.db('users')
                //onde  o email deve ser user.email
                .where({ email: user.email }).first()

            //se nao tem user.id
            if (!user.id) {
                //se o usuario nao existir vai passar e se existir vai cair em 'usuario ja cadastrado'
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
            //se der erro
        } catch (msg) {
            //erro no lado do cliente
            return res.status(400).send(msg)
        }
        //user.password recebendo a senha encryptada
        user.password = encryptPassword(user.password)
        //deletando user.confirmPassword 
        delete user.confirmPassword
        //se tem user.id esta setado
        if (user.id) {
            app.db('users')
                //atualiza o usuario
                .update(user)
                //onde o id deve ser igual ao id passado
                .where({ id: user.id })
                .whereNull('deletedAt')
                //msg de retorno que deu certo
                .then(_ => res.status(204).send())
                //erro ao lado do servidor
                .catch(err => res.status(500).send(err))


        }
        //senao 
        else {

            app.db('users')
                //inserir novo usuario
                .insert(user)
                //msg de sucesso
                .then(_ => res.status(204).send())
                //erro ao lado do servidor
                .catch(err => res.status(500).send(err))

        }
    }
    //capturar dados de todos usuarios do banco usando get
    const get = (req, res) => {
        app.db('users')
            //selecionar dados do banco
            .select('id', 'name', 'email', 'admin')
            .whereNull('deletedAt')
            //fazer parsee converter em json
            .then(users => res.json(users))
            //se apresentar erro ao lado do servidor
            .catch(err => res.status(500).send(err))

    }
    //capturar dados de um usuario usando id 
    const getById = (req, res) => {
        //se users estiver setado
        if ('users') {

            app.db('users')
                //selecionar dados
                .select('id', 'name', 'email', 'admin')
                //onde id passado deve ser igual ao id do banco e este valor dever unico
                .where({ id: req.params.id }).first()
                .whereNull('deletedAt')
                //parser para json
                .then(user => res.json(user))
                //erro ao lado do servidor
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const articles = await app.db('articles')
                .where({ userId: req.params.id })
            notExistsOrError(articles, 'Usuário possui artigos!')
            const rowsUpdate = await app.db('users')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdate, 'Usuário não foi encontrado!')
            res.status(204).send()

        } catch (msg) {
            res.status(400).send(msg)
        }
    }
    //retorno das funcoes save,get e getById
    return { save, get, getById, remove }

}