// server.js
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const path = require('path');
const fs = require("fs");

const usersRoute = require('./Routes/users')

app.use(cors());
app.get('/downloadPdf', (req, res) => {
    const filePath = path.join(__dirname, './public/Raj_Guragain_Resume.pdf');
    res.sendFile(filePath);
});


// Use routes
app.use(cors())
app.use('/users', usersRoute)

// Example specifying the port and starting the server
const port = process.env.PORT || 3000 // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
