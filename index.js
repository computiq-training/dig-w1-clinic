const express = require('express')
const app = express()
const patientsRouter = require('./src/routes/v1/patients')
const historyrouter = require('./src/routes/v1/history')


const PORT = 5009;
// middlwares
app.use(express.json())

// for testing
app.get('/', (req, res)=>{
    res.send('<h1>This is Clinic Restful API</h1>')
});

// call routers

app.use('/api/v1/patients',patientsRouter);
app.use('/api/v1/history',historyrouter);


app.listen(PORT)