const express = require('express')
const router = express.Router()
const {getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient, createpateintForP} = require('../../controllers/v1/patients/PatientController')




router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.post('/', createpateintForP);

router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

router.get('/:id/history', getHistoryOfPatient);

// TO-DO // add endpoint for adding new Patient
module.exports = router;