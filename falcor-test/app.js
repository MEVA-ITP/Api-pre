let express = require('express')
let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy
let LdapStrategy = require('passport-ldapauth').Strategy
let path = require('path')
let falcorExpress = require('falcor-express')
let Router = require('falcor-router')
let config = require('./config')

passport.use(new LdapStrategy({
    server: {
        uri: "ldap://10.2.24.151:389",
        searchBase: "ou=people,ou=identity,dc=tgm,dc=ac,dc=at"
    }
}))

passport.use(new LocalStrategy((username, password, done) => {
    if (username === 'david' && password === 'david') {
        done(null, 'dlangheiter')
    } else {
        done(null, false)
    }
}))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((id, done) => {
    done(null, id)
})

let app = express()

app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({extended: true}))
app.use(require('express-session')({secret: 'keyboard cat', resave: false, saveUninitialized: false}))

app.use(passport.initialize())
app.use(passport.session())

app.post('/login',
    passport.authenticate('local', {failureRedirect: '/login', successReturnToOrRedirect: '/'}),
)

app.get('/logout',
    (req, res) => {
        req.logout()
        res.redirect('/')
    })

app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        res.send(`<h1>Name: ${req.user}</h1>`)
    })

app.use('/model.json',
    require('connect-ensure-login').ensureLoggedIn(),
    falcorExpress.dataSourceRoute(function (req, res) {
        console.log('Falcor', req.user)
        // create a Virtual JSON resource with single key ("greeting")
        return new Router([
            {
                // match a request for the key "greeting"
                route: "greeting",
                // respond with a PathValue with the value of "Hello World."
                get: function () {
                    return {path: ["greeting"], value: "Hello World"};
                }
            }
        ]);
    }));

app.use('/', express.static(__dirname + '/'))

app.listen(3000, () => console.log('Server started'))