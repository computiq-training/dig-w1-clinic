const express = require('express')
const app = express()
const patientsRouter = require('./src/routes/v1/patients')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/clinic');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to db successfully");
});


const PORT = 5000;
// middlwares
app.use(express.json())

// for testing
app.get('/', (req, res)=>{
    res.send('<h1>This is Clinic Restful API</h1>')
});

// call routers

app.use('/api/v1/patients',patientsRouter);

app.listen(PORT)