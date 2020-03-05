// /Users/דורון/mongodb/bin/mongod.exe --dbpath=/users/דורון/mongodb-data

const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, // to avoid message on connection ! 
})


