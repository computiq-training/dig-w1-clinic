const {success, error} = require('../../../utils/responser')
const {history} = require('../history/HistoryController')
const patients = [
    {
        id:1,
        full_name:"Adel Ahmed",
        birth_date:"19/10/2022",
        gender:"male",
        code:"100",
        phone:"+9647711332225"
    },
    {
        id:2,
        full_name:"Sara Ali",
        birth_date:"01/10/2000",
        gender:"female",
        code:"101",
        phone:"+9647711332226"
    },
    {
        id:3,
        full_name:"Saif Ahmed",
        birth_date:"16/05/1977",
        gender:"male",
        code:"102",
        phone:"+9647711332227"
    },
    
]
const getAllPatients = (req, res)=>{
    return res.status(200).json(success(200,patients,"Success"))
}
const getPatientById = (req, res)=>{
    const id = req.params.id;
    const patient = patients.find(patient => patient.id == id)
    if (patient) return res.status(200).json(success(200,patient,"Success"))
    else return res.status(404).json(error(404, "patient not found"))
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    const patient = patients.find(patient => patient.id == id)
    if(patient) {
        patients.splice(patient, 1)
        return res.status(200).json(success(200,patients,"Success, patient deleted"))
    } 
    else return res.status(404).json(error(404, "patient not found"))
}

const updatePatient = (req, res)=>{
    const pId = req.params.id;
    const {id, full_name, birth_date, gender, code, phone} = req.body;
    const patient = patients.find(patient => patient.id == pId);
    if (patient) {
        patient.full_name = full_name;
        return res.status(200).json(success(200,patient,"Successfully Updated"))
    }
    else return res.status(404).json(error(404, "patient not found"))
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; 
    const patientHistory = history.find(pHistory => pHistory.patient_id == id);
    if (patientHistory)     return res.status(200).json(success(200,patientHistory,"Ok"))
    else return res.status(404).json(error(404, "patient's history not found"))
}

const addNewPatient = (req, res) => {
    const {id, full_name, birth_date, gender, code, phone} = req.body;
    patients.push({
        id,
        full_name,
        birth_date,
        gender,
        code,
        phone
    })
    return res.status(200).json(success(200,patients,"Success"))

}

module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    addNewPatient
}