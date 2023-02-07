const app = require('express')
const router = app.Router()

// base url
const base_url = 'http://localhost:8080/'

router.get('/admin/dashboard', (req, res) => {
    res.render('admin/dashboard', {
        title: 'Admin Dashboard',
        base_url: base_url
    })  
})

module.exports = router