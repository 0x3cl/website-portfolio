const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const path = require('path')
const app = express()

const hostname = 'localhost'
const port = process.env.PORT

// base url
const base_url = 'http://{$hostname}:{port}'

// set static paths
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('view engine', 'ejs')
app.set('views', './src/views')

// set logs
app.use(morgan('tiny'))

// home routes
app.get('/', require('./src/routes/index'))

// admmin routes
app.get('/admin/login', require('./src/routes/admin/login.js'))
app.get('/admin/dashboard', require('./src/routes/admin/dashboard.js'))
app.get('/admin/home', require('./src/routes/admin/home.js'))
app.get('/admin/about', require('./src/routes/admin/about.js'))
app.get('/admin/skills', require('./src/routes/admin/skills.js'))
app.get('/admin/works', require('./src/routes/admin/works.js'))
app.get('/admin/testimonials', require('./src/routes/admin/testimonials.js'))
app.get('/admin/contacts', require('./src/routes/admin/contact.js'))

app.listen(port, () => {
    console.log('listening on port http://localhost:' + port)
})

