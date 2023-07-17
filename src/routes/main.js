const Express = require('express')
const router = Express.Router()
const path = require('path')


router.get('/', (req, res) => {
    return(res.render('home.html'))
})


router.get('/download', (req, res) => {
    const fullPath = path.join(__dirname, `../assets/PM_924_SO3_CFR.pdf`)
    res.download(fullPath)
})

module.exports = router