const express = require('express')
const app = express()
const PORT = 5000;
// middlwares
app.use(express.json())

// for testing
app.get('/', (req, res)=>{
    res.send('<h1>Hello</h1>')
});
app.listen(PORT)