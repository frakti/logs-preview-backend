const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/log', function (req, res) {
  console.info(req.body)
  res.send();
})

app.listen(6543, function () {
  console.log('Example app listening on port 6543!')
})
