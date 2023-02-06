const app = require('express')
const router = app.Router()

// base url
const base_url = 'http://localhost:8080/'

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Portfolio',
        base_url: base_url
    })
})

router.post('/api/send-message', (req, res) => {

})

router.post('/api/project-ideas', (req, res) => {
    
})

module.exports = router