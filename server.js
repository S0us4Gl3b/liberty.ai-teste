const express = require('express')
const cors = require('cors') 
const path = require('path')

app = express()
port = process.env.PORT || 4000

const uploadDir = path.join(__dirname, 'public')

app.use(cors())
app.use(express.static(uploadDir))

app.listen(port, () => {
    console.log(`Servidor Servindo o front na porta ${port}`)
})