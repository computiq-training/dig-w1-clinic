const express = require('express')
const router = express.Router()
const {searchPatients,createPatient,getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient, addNewPatient} = require('../../controllers/v1/patients/PatientController')



router.get('/', getAllPatients);
router.get('/search', searchPatients);
router.get('/:id', getPatientById);
router.delete('/:id', deletePatient);
router.put('/:id', updatePatient);
router.get('/:id/history', getHistoryOfPatient);
router.post(`/`, createPatient);


module.exports = router;