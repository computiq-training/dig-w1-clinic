const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const {getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient, createpateintForP} = require('../../controllers/v1/patients/PatientController')

=======
const {searchPatients,createPatient,getAllPatients, getPatientById, deletePatient, updatePatient, getHistoryOfPatient} = require('../../controllers/v1/patients/PatientController')
>>>>>>> 06e24920ecd071b1f4b706c7019b8e35b8f1de54



router.get('/', getAllPatients);
router.get('/search', searchPatients);
router.get('/:id', getPatientById);
router.post('/', createpateintForP);

router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

router.get('/:id/history', getHistoryOfPatient);

// TO-DO // add endpoint for adding new Patient
router.post(`/`, createPatient);


module.exports = router;