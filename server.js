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

// routes
app.get('/', require('./src/routes/index'))
app.get('/admin/login', require('./src/routes/admin/login.js'))


app.listen(port, () => {
    console.log('listening on port http://localhost:' + port)
})

