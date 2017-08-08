const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/log', function (req, res) {
  console.info(req.query.msg);
  res.send("ok")
})

app.listen(6543, function () {
  console.log('Example app listening on port 6543!')
})
