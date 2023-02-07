const app = require('express')
const router = app.Router()

router.get('/admin/dashboard', (req, res) => {
    res.render('admin/dashboard', {
        title: 'Admin Dashboard',
        sidebar_active: 'dashboard',
    })  
})


module.exports = router