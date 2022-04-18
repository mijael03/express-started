const express = require('express')
const app = express()
const path = require('path');
const port = 5000

app.get('/', (req, res) => {
    res.send('This is the main route of the web app express')
})
app.get('/clientes', (req, res) => {
    res.sendFile(path.join(__dirname, '/clientes.html'));
})
app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, '/productos.html'));
})

app.listen(port, () => {
    console.log(`This is an express app running in port ${port} for Lab04`)
})