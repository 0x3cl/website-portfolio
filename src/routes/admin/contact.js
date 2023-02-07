const app = require('express')
const router = app.Router()

router.get('/admin/contacts', (req, res) => {
    res.render('admin/contact', {
        title: 'Admin Dashboard',
        sidebar_active: 'contact',
    })  
})

module.exports = router