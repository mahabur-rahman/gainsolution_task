const express = require('express')
const app = express()
const colors = require('colors')
const cors = require("cors");
const dotenv = require('dotenv')

// env config 
dotenv.config()
const PORT = process.env.PORT || 5000
// connect with mongodb atlas
const connectedDB = require("./db/connect");
connectedDB();

// ROUTE  
const authRoute = require('./routes/auth.route')
const userRoute = require('./routes/users.route')

// middleware 
app.use(cors())
app.use(express.json())


app.use('/api/auth', authRoute)
app.use('/api/users',userRoute)

// listen 
app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})