const app = require('express')
const router = app.Router()

router.get('/admin/home', (req, res) => {
    res.render('admin/home', {
        title: 'Home Page',
        sidebar_active: 'home',
    })  
})

module.exports = router