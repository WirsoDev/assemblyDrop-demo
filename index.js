const Express = require('express')
const bodyparser = require('body-parser')
const nunjucks = require('nunjucks')
const device = require('express-device')


const app = Express()

app.use(Express.static('public'))
app.use(Express.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(device.capture())

//template engine

nunjucks.configure('./src/views', {
    express: app,
    noCache: true
})

app.use('/', require('./src/routes/main'))


app.use(function(req, res, next) {
    res.status(404);
    res.send('404');
});

// start server
var port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })