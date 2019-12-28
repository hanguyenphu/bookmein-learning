// /Users/hanguyen/mongodb/bin/mongod --dbpath=/Users/hanguyen/mongodb-data
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/bookmein-learning', {
    useNewUrlParser:  true,
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useFindAndModify:false
})

