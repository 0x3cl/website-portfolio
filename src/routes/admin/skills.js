const app = require('express')
const router = app.Router()

router.get('/admin/skills', (req, res) => {
    res.render('admin/skills', {
        title: 'Skills Page',
        sidebar_active: 'skills',
    })  
})

module.exports = router