const express = require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

app.use(require('morgan')('tiny'))
app.use(require('cors')())
app.use(express.json())

const models = require('./models')

//routes
const userRoute = require('./routes/userRoute')
app.use('/user', userRoute)

const plantRoute = require('./routes/plantRoute')
app.use('/plant', plantRoute)

const orderRoute = require('./routes/orderRoute')
app.use('/order', orderRoute)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    // routesReport.print()
    console.log(`server listening on ${PORT}`)
  })