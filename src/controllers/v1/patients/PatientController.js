const {success, error} = require('../../../utils/responser')
const HistoryController = require('../history/HistoryController')
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
    return res.status(200).json(success(200,patients,"Success Get All Information Patient"))
}
const getPatientById = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    let patient = patients.find((item)=> item.id == id)
    if(!patient)
        return res.status(404).json(error(404, `Not Found Patient ID ${id}`))
    else
        return res.status(200).json(success(200, patient, `Success Get Information By ID Patient ${id}`))        

}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    let patientIndex = patients.findIndex((item)=> item.id == id)
    if(patientIndex > -1)
    {
        patients.splice(patientIndex,1)
        return res.status(200).json(success(200, patients, `Success Deleted Patient ID ${id}`)) 
    }else{
        return res.status(404).json(error(404, `Not Found Patient ID ${id}`)) 
    }
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    const {full_name, birth_date, gender, code, phone} = req.body
    let patientIndex = patients.findIndex((item)=> item.id == id)
    if(patientIndex > -1)
    {
        let newPatient = {
            id:id,
            full_name:full_name,
            birth_date:birth_date,
            gender:gender,
            code:code,
            phone:phone
        };
        patients[patientIndex] = newPatient;
        return res.status(200).json(success(200, patients[patientIndex], `Success Update Patient ID ${id}`))
    }else{
        return res.status(404).json(error(404, `Not Found Patient ID ${id}`))
    }
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    // TO-DO
    let history = HistoryController.history
    history = history.find((item)=> item.patient_id == id)
    if(!history)
        return res.status(404).json(error(404, `Not Found History For Patient ID ${id}`))
    else
        return res.status(200).json(success(200, history, `Success Get All Information History Of Patient ID ${id}`))
}

const createPatient = (req, res)=>{
    let {
        id, full_name, birth_date, gender, code, phone
    } = req.body
    let patient = {
        id:id,
        full_name:full_name,
        birth_date:birth_date,
        gender:gender,
        code:code,
        phone:phone
    }
    patients.push(patient)
    return res.status(201).json(success(201, patient, "Success Add Patient"))
}

module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient,
    patients
}