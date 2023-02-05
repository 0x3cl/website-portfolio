const app = require('express')
const router = app.Router()
const hostname = 'localhost'
const port = process.env.PORT

// base url
const base_url = `http://${hostname}:${port}`

router.get('/admin/login', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
        base_url: base_url
    })
})

module.exports = router