const express = require('express')
const appRouter = require('./router')
const connectDB = require('./lib/mongoose')
const app = express();

app.use(express.json())

connectDB()
appRouter(app)

app.use('/app', express.static('public'))

app.listen(3001)
