const express = require('express')
const appRouter = require('./router')
const connectDB = require('./lib/mongoose')
const app = express();
const server = require('http').Server(app)
const {connect} = require('../socket')
app.use(express.json())

connectDB()
connect(server)
appRouter(app)

app.use('/app', express.static('public'))

server.listen(3001,()=>{
    console.log('[SERVER] on port 3001')
})
