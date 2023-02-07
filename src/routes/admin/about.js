const app = require('express')
const router = app.Router()

router.get('/admin/about', (req, res) => {
    res.render('admin/about', {
        title: 'Admin Dashboard',
        sidebar_active: 'about',
    })  
})

module.exports = router