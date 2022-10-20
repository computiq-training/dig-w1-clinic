const express = require('express')

const patientsFunctions = require('../../controllers/v1/patients/PatientController')

const patientsRouter = express.Router()

patientsRouter.get('/', patientsFunctions.getAllPatients);
patientsRouter.post('/New-Post', patientsFunctions.createPatients);

patientsRouter.route('/:id/history')
.get(patientsFunctions.getHistoryOfPatient);

patientsRouter.route('/:id')
.get(patientsFunctions.getPatientById)
.delete(patientsFunctions.deletePatient)
.put(patientsFunctions.updatePatient);


module.exports = patientsRouter;