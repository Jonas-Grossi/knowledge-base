//O Passport é um middleware de autenticação para Node.js .
// Passport-jwt e usado para autenticação com um JSON Web Token .

//instanciando authSecretc com a senha passada em require.env
const { authSecret } = require('../.env')
//instanciando passport
const passport = require('passport')
//instanciando passportJwt
const passportJwt = require('passport-jwt')

//instanciando strategy para criptografia e extract para descriptografia
const { Strategy, ExtractJwt } = passportJwt

//exportando app
module.exports = app => {
    //criando objeto com paramentros  senha  e o token para conexao
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    //cripotgrafando o token
    const strategy = new Strategy(params, (payload, done) => {
        //conexao com o banco pegando users
        app.db('users')
        //onde pegamos o primeiro id
            .where({ id: payload.id })
            .first()
            //
            .then(user => done(null, user ? { ...payload } : false))
            //se der erro
            .catch(err => done(err, false))
    })

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}