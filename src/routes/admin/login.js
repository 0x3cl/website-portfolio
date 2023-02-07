const app = require('express')
const router = app.Router()

// base url
const base_url = "http://localhost:1000"

router.get('/admin/login', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
        base_url: base_url
    })  
})

module.exports = router