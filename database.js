
const mongoose = require('mongoose')

const db_url = process.env.DATABASE
// const db_url = "mongodb+srv://karanpal03040:mydatabase@cluster0.yb8alkm.mongodb.net/crud?retryWrites=true&w=majority";


const databaseConnection = () => {

    mongoose.connect(db_url).then(() => {
        console.log('Connection succesfull')
    }).catch((error) => {
        console.log(error.message)
    })
}

module.exports = databaseConnection;