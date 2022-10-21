const express = require('express')
const router = express.Router()
const {getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient,createPatient} = require('../../controllers/v1/patients/PatientController')



router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.delete('/:id', deletePatient);
router.put('/:id', updatePatient);
router.get('/:id/history', getHistoryOfPatient);
router.post('/create',createPatient)
// TO-DO // add endpoint for adding new Patient
module.exports = router;