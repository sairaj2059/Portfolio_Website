// server.js
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

// Include route files
const usersRoute = require('./Routes/users')

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>')
})

// Use routes
app.use(cors())
app.use('/users', usersRoute)

// Example specifying the port and starting the server
const port = process.env.PORT || 3000 // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
