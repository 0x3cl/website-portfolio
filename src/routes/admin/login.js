const app = require('express')
const router = app.Router()

router.get('/admin/login', (req, res) => {
    res.render('admin/login', {
        title: 'Admin Login',
    })  
})

module.exports = router