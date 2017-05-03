var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

app = express()
app.use(express.static(__dirname))

var port = process.env.PORT || 5000
app.listen(port)

console.log('server started '+ port)
