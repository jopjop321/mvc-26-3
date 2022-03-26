const express = require('express')
const app = express()

function server() {
  app.set('view engine', 'ejs');
  app.use(express.json())
  app.use('/',require('./routes'))
  app.use('/netincome',require('./netincome'))

  app.listen(9000, () => {
    console.log('Application is running on port 9000')
  })

}

module.exports = server


