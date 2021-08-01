const express = require('express')
const app = express()

app.set('view engine', 'html');

 
app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
 })
 
app.listen(3000, console.log(`server started on port 3000`));
