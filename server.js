require('dotenv').config()

const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

db.connect(err => {
  if (err) throw err
  console.log('MySQL Connection successful...')
})

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.get('/scores', (req, res) => {
  let sql = 'select name, score from scores;'
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

app.get('/leaderboard', (req, res) => {
  let sql = 'select name, score from scores order by score desc limit 10'
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

app.post('/scores', (req, res) => {
  let obj = {
    name: req.body.name,
    score: req.body.score
  }

  let sql = `insert into scores set ?`
  let query = db.query(sql, obj, (err, result) => {
    if (err) throw err
    return res.send('It worked')
  })
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})
