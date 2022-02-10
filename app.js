const express = require('express')
const app = express()
const port = 3000
const userController = require('./controllers/userController.js')

app.get('/', userController.findAllUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})