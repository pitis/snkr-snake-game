const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')

connectDB()

app.use(express.static('client/dist'))
app.use(express.json())
app.use(cors())

app.use('/', require('./routes/api/scores'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on ${port}`))
