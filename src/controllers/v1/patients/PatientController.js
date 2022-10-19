const { success, error } = require('../../../utils/responser')
const {history} = require('../history/HistoryController')
const patients = [
    {
        id: 1,
        full_name: "Adel Ahmed",
        birth_date: "19/10/2022",
        gender: "male",
        code: "100",
        phone: "+9647711332225"
    },
    {
        id: 1,
        full_name: "Sara Ali",
        birth_date: "01/10/2000",
        gender: "female",
        code: "101",
        phone: "+9647711332226"
    },
    {
        id: 3,
        full_name: "Saif Ahmed",
        birth_date: "16/05/1977",
        gender: "male",
        code: "102",
        phone: "+9647711332227"
    },

]
const getAllPatients = (req, res) => {
    return res.status(200).json(success(200, patients, "Success"))
}
const getPatientById = (req, res) => {
    const id = req.params.id;
    let patient = patients.find(el => el.id == id);
    if(patient){
        return res.status(200).json(success(200, patient, "Success"))
    }else{
        return res.status(404).json(error(404, "Not Found"))
    }
}

const deletePatient = (req, res) => {
    const id = req.params.id;
    let index = patients.findIndex(el => el.id == id);
    if (index > -1) {
        let patient = patients[index]
        patients.splice(index, 1)
        return res.status(200).json(success(200, patient, "Success"))
    } else {
        return res.status(404).json(error(404, "Not Found"))
    }
}

const updatePatient = (req, res) => {
    const id = req.params.id;
    let index = patients.findIndex(el => el.id == id);
    if (index > -1) {
        let newPatient = {
            id: req.body.id,
            full_name: req.body.full_name,
            birth_date: req.body.birth_date,
            gender: req.body.gender,
            code: req.body.code,
            phone: req.body.phone,
        }
        patients[index] = newPatient;

        return res.status(200).json(success(200, patients[index], "Success"))
    } else {
        return res.status(404).json(error(404, "Not Found"))
    }
}

const getHistoryOfPatient = (req, res) => {
    const id = req.params.id; 
    var patientHistory = history.filter(el => el.patient_id == id)
    if(patientHistory){

        return res.status(200).json(success(200,patientHistory, "Ok"))
    }else{
        return res.status(404).json(error(404, "Not Found"))
    }
}


module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    patients,
}