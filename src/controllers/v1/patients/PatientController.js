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
    // TO-DO
    let patient = patients.find((p)=> p.id == id)
    if(!patient){
       return res.status(404).json(error(404,"patient Not Found"))

    } else{
        return res.status(200).json(success(200, patient, "ok"))
    }
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    let patientdelete = patients.findIndex((p)=> p.id == id)
    if(patientdelete > -1)
    {
        patients.splice(patientdelete,1)
        res.status(200).json(success(200, patientdelete, `patient deleted`))
    }      
    else{
        res.status(404).json(error(404,"patient not deleted"))

    } 
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    const {full_name, birth_date, gender, code, phone}= req.body
    let patient = patients.find((p)=> p.id == id)

    if(!patient){
        return res.status(404).json(error(404,"patient Not Found"))

    }else{
         patients.map((p)=>{
            if(p.id == id){
                p.id = id
                p.full_name = full_name
                p.birth_date= birth_date
                p.gender = gender
                p.code = code
                p.phone = phone
            }
        })
        return res.status(200).json(success(200,patient,"Ok"))
    }
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    let foundinghistory = history.find((h)=>(h.patient_id== id))
    // TO-DO
    return res.status(200).json(success(200,foundinghistory,"Ok"))
}
const createPatient=(req, res)=>{
    const {id, full_name, birth_date, gender, code, phone}= req.body
    console.log(id)
    let patient = {
        id: id,
        full_name: full_name,
        birth_date: birth_date,
        gender: gender,
        code: code,
        phone: phone
    }
    patients.push(patient)
    return res.status(200).json(success(200, patient, "ok"))
}
module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient,
}