const app = require('express')
const router = app.Router()

router.get('/admin/works', (req, res) => {
    res.render('admin/works', {
        title: 'Works Page',
        sidebar_active: 'works',
    })  
})


module.exports = router