const app = require('express')
const router = app.Router()

router.get('/admin/testimonials', (req, res) => {
    res.render('admin/testimonials', {
        title: 'Admin Dashboard',
        sidebar_active: 'testimonials',
    })  
})

module.exports = router