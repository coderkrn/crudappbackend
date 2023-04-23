require('dotenv').config();
const express = require('express');
const app = express();
const databaseConnection = require('./database')
databaseConnection();
const users = require('./models/userSchema')
const cors = require('cors')

const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json())

app.use('/api', require('./routes/Auth'))

app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.listen(port, ()=>{
    console.log(`Servre is running on ${port} `)
})
