const app = require('express')
const router = app.Router()

router.get('/admin/login', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
        base_url: 'https://' + req.get('host')
    })  
})

module.exports = router