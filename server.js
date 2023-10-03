const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.use('/static', express.static('static'))

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(80,() => {
    console.log("Server started on port 80!")
})