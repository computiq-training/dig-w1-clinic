const { request } = require('express')
const {success, error} = require('../../../utils/responser')
const {history}=require('../history/HistoryController')
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
    let patient = patients.find((item)=>item.id == id)
    if(!patient)
        res.status(404).json(error('patient Not Found',404))
    else{
        res.status(200).json(success(200,patient,"f"))

        }  
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    let patient = patients.findIndex((item)=> item.id == id)
    if(patient > -1)
    {
        patients.splice(patient,1)
        res.status(200).json(success(200, patients, "patient deleted"))
    }      
    else{
        res.status(404).json(error(404," Not Found "))

    }  
}


const updatePatient = (req, res)=>{
    const id = req.params.id;
const {full_name,birth_date,gender,code,phone}=req.body
    let patientsIndex = patients.findIndex((item)=> item.id == id)
    if(patientsIndex > -1)
    {    
        let newPatients = {
            id:id,
            full_name:full_name,
            birth_date:birth_date,
            gender:gender,
            code:code,
            phone:phone
        
        };

        patients[patientsIndex] = newPatients;
        res.status(200).json(success(200,patients, "updated"))
    }      
    else{
        res.status(404).json(error(404,"Not found"))

    }  
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    let patientHistory = history.find((item)=>item.patient_id == id)
    if(!patientHistory)
    res.status(404).json(error('patientHistroy Not Found',404))
    else{
        return res.status(200).json(success(200,patientHistory,"Ok"))

        }  
    
}
const CreatNewPatient=(req,res)=>{
    let {id,
        full_name,
        birth_date,
        gender,
        code,
        phone
    } = req.body
    let NewPatient = {
        id:id,
        full_name:full_name,
        birth_date:birth_date,
        gender:gender,
        code:code,
        phone:phone
    }
    patients.push(NewPatient)
    res.status(201).json(success(201, NewPatient, "Patient Created"))



}


module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    CreatNewPatient,
}