const app = require('express')
const router = app.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Portfolio',
    })
})

router.post('/api/send-message', (req, res) => {

})

router.post('/api/project-ideas', (req, res) => {
    
})

module.exports = router