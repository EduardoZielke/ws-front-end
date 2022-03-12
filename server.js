const express = require('express')
const app = express()
const {resolve} = require('path')

app.use('/*', express.static(resolve(__dirname, './build/index.html')))

app.listen(process.env.PORT || 5000, (err) => {
    if(err) {return console.log(err)}

    console.log('Servidor Front-end rodando!')
})
