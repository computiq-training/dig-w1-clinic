const express = require('express')

const {getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient,createPatients} = require('../../controllers/v1/patients/PatientController')

const router = express.Router()

router.get('/:id/history', getHistoryOfPatient);

router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.delete('/:id', deletePatient);
router.put('/:id', updatePatient);
router.post('/New-Post', createPatients);
module.exports = router;