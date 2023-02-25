//instanciando admin para verficar se o usuario e adm
const admin = require('./admin')
//rotas e metodos de requisição que estaram disponiveis na rota
//exportando app
module.exports = app => {
    //requisiçoes do tipo post
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)


    //reuisicoes em users
    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))

    //requisicoes com id setado
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        //usuario admin
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))


    //req em categorias
    app.route('/categories')
        .all(app.config.passport.authenticate())
        //usuario admin
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save))

    // Cuidado com ordem! Tem que vir antes de /categories/:id

    //arvore
    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))

    //artigos
    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))

    //artigos com id setado
    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))

    //categorias e artigos
    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)

    //estatisticas
    app.route('/stats')
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)
}