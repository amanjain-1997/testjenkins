const express = require('express')
var isRegex = require('is-regex');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var new1 = isRegex(1)
  console.log(new1)
  res.send("hellonew"+new1.toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
