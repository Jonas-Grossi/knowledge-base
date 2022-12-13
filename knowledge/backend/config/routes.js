const admin = require('./admin')
//exporta modulo app com as funcoes executadas atraves da rota

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)


    app.route('/users')
        .all(app.config.passport.authenticate())
        //adicionar 
        .post(admin(app.api.user.save))
        //pagar todos usuarios
        .get(admin(app.api.user.get))

    //rota com id selecionado
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        //alteracao
        .put(admin(app.api.user.save))
        //pegar usuario do id
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))


    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save))



    //cuidado com a ordem! Ten que vir antes de /categories/:id

    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)


    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))


    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))


    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))


    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)

    app.route('/stats')
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)


}       