const express = require('express')
const router = express.Router()
const {getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient} = require('../../controllers/v1/patients/PatientController')
const {createHistoryForP} = require('../../controllers/v1/history/HistoryController')



router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.delete('/:id', deletePatient);
router.put('/:id', updatePatient);
router.get('/:id/history', getHistoryOfPatient);
router.post('/:id/history', createHistoryForP);
// TO-DO // add endpoint for adding new Patient
module.exports = router;