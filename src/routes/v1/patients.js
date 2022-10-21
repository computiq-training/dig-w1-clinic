const express = require('express')
const router = express.Router()
const {newPatient,getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient} = require('../../controllers/v1/patients/PatientController')



router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.delete('/:id', deletePatient);
router.put('/:id', updatePatient);
router.get('/:id/history', getHistoryOfPatient);
// TO-DO // add endpoint for adding new Patient
router.post('/', newPatient);

module.exports = router;