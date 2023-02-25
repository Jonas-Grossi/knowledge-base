//instanciando queries
const queries = require('./queries')

module.exports = app => {
    //instanciando a funcao para verificar se existe
    const { existsOrError } = app.api.validation
    
    
    //salvar dados
    const save = (req, res) => {
        //article recebe os dados passados do frontend
        const article = { ...req.body }
        //se id estiver setado  article.id recebe id da requisicao
        if(req.params.id) article.id = req.params.id
        
        //verificação de erros no corpo da req
        try {
            existsOrError(article.name, 'Nome não informado')
            existsOrError(article.description, 'Descrição não informada')
            existsOrError(article.categoryId, 'Categoria não informada')
            existsOrError(article.userId, 'Autor não informado')
            existsOrError(article.content, 'Conteúdo não informado')
            //se nao passar pela etada acima erro ao lado do cliente
        } catch(msg) {
            res.status(400).send(msg)
        }
        //se o id do artigo estiver setado sera um update
        if(article.id) {
            //acessado o banco na area de artigos 
            app.db('articles')
            //realiza o update do artigo ou cadastra o novo artigo 
                .update(article)
                //se for update vai comparar 
                .where({ id: article.id })
                //se resp de solicitação bem sucedida
                .then(_ => res.status(204).send())
                //resp se der erro ao lado do servidor
                .catch(err => res.status(500).send(err))
        } else {
              //se o id nao estiver setado sera um novo artigo  
            app.db('articles')
            //insere um novo artigo
                .insert(article)
                //resposta de req bem sucessida
                .then(_ => res.status(204).send())
                //erro ao lado do servidor
                .catch(err => res.status(500).send(err))
        }
    }
    //função para remover 
    const remove = async (req, res) => {
        try {
            //array para receber os artigos
            const rowsDeleted = await app.db('articles')
            //onde id setado deve ser removido
                .where({ id: req.params.id }).del()
            //se o artigo for encontrado delete
            try {
                //verificação se 
                existsOrError(rowsDeleted, 'Artigo não foi encontrado.')
            } catch(msg) {
                //erro ao lado do cliente
                return res.status(400).send(msg)    
            }
                //sucesso
            res.status(204).send()
        } catch(msg) {
            //erro ao lado servidor
            res.status(500).send(msg)
        }
    }
    //limite para paginação
    const limit = 10 // usado para paginação
    const get = async (req, res) => {
        //page recebendo qual pagina atual ou recebendo a primeira
        const page = req.query.page || 1

        //resultado recebendo o numero de artigos a serem carregados
        const result = await app.db('articles').count('id').first()
        const count = parseInt(result.count)

        app.db('articles')
            .select('id', 'name', 'description')
            //definindo a partir de qual valor vai começãr a contar
            .limit(limit).offset(page * limit - limit)
            //carregando os arquivos na tela  
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }
//pega dado pelo id no banco de dados
    const getById = (req, res) => {
        app.db('articles')
            .where({ id: req.params.id })
            .first()
            .then(article => {
                article.content = article.content.toString()
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }
    //pegando os artigos pela categoria
    const getByCategory = async (req, res) => {
        const categoryId = req.params.id
        const page = req.query.page || 1
        const categories = await app.db.raw(queries.categoryWithChildren, categoryId)
        const ids = categories.rows.map(c => c.id)

        app.db({a: 'articles', u: 'users'})
            .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
            .limit(limit).offset(page * limit - limit)
            .whereRaw('?? = ??', ['u.id', 'a.userId'])
            .whereIn('categoryId', ids)
            .orderBy('a.id', 'desc')
            .then(articles => res.json(articles))
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById, getByCategory }
}