const express = require('express')

const {getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient,createPatients} = require('../../controllers/v1/patients/PatientController')

const patientsRouter = express.Router()

patientsRouter.get('/', getAllPatients);
patientsRouter.post('/New-Post', createPatients);

patientsRouter.route('/:id/history')
.get(getHistoryOfPatient);

patientsRouter.route('/:id')
.get(getPatientById)
.delete(deletePatient)
.put(updatePatient);


module.exports = patientsRouter;