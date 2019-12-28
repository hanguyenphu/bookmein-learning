const express = require('express')
require('./db/mongoose')
const accountRouter = require('./routers/account')


const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Hello Back End')
})

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(accountRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
