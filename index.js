const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const serverPort = 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send({ error: false, data: "First API endpoint!" })
})

app.listen(serverPort, () => {
  console.log('Server started on port: ' + serverPort)
})

module.exports = app
