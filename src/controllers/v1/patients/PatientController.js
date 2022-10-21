const {success, error} = require('../../../utils/responser')
const patientHistory = require('../history/HistoryController')
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
const createPatient = (req, res)=>{
    const  {id, full_name, birth_date, gender, code, phone} = req.body
    let newPatient = {
        id: id,
        full_name: full_name,
        birth_date: birth_date,
        gender: gender,
        code: code,
        phone: phone
    };
        
    if (newPatient)   
    { 
        patients.push(newPatient)
        return res.status(201).json(success(201,newPatient,`Patient ${id} created`))
    }else 
        return res.status(404).json(error(404,"Patient not added"))
}
const getAllPatients = (req, res)=>{
    return res.status(200).json(success(200,patients,"Success"))
}
const getPatientById = (req, res)=>{
    const id = req.params.id;
    let patient = patients.find((item)=> item.id == id)
    if (patient) 
        return res.status(200).json(success(200,patient,"Success"))
    else 
        return res.status(404).json(error(404,"Not found"))
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    let patientIndex = patients.findIndex((item)=> item.id == id)
    if (patientIndex > -1)
    {
        patients.splice(patientIndex,1)
        return res.status(200).json(success(200,patientIndex,`Patient ${id} Deleted`))
    } else 
        return res.status(404).json(error(404,"Not found and not deleted"))
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    const  {full_name, birth_date, gender, code, phone} = req.body
    let patientIndex = patients.findIndex((item)=> item.id == id)
    if (patientIndex > -1 )
    {
        let newPatient = {
            id: id,
            full_name: full_name,
            birth_date: birth_date,
            gender: gender,
            code: code,
            phone: phone
            
        };
        patients[patientIndex] = newPatient;
        
        return res.status(200).json(success(200,patients,`Patient ${id} Updated`))
    } else 
        return res.status(404).json(error(404,"Not found and not updated"))
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    let history = patientHistory.history
    let patientHis = history.find((item)=> item.patient_id == id)
    if (patientHis) 
        return res.status(200).json(success(200,patientHis,"Success"))
    else 
        return res.status(404).json(error(404,"Not found"))
}

module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient
}