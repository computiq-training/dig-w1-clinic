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

    let patient = patients.find((ele)=> ele.id == id)
    if(!patient)
        res.status(404).json(error(404,"Your Patient Not Found"))
    else
        res.status(200).json(success(200, patient, "Your Patient Found"))
}

const deletePatient = (req, res)=>{
    const id = req.params.id;

    let patientIndex = patients.findIndex((ele)=> ele.id == id)
    if(patientIndex > -1)
    {
        patients.splice(patientIndex,1)
        res.status(200).json(success(200, patients, `Patient Is${id} deleted...`))
    }      
    else{
        res.status(404).json(error(404,"Your Patient Not Found Can't Delete..."))

    }  
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    const {full_name, birth_date, gender, code, phone} = req.body

    let patientIndex = patients.findIndex((ele)=> ele.id == id)
    if(patientIndex > -1)
    {
        let newPatient = {
            id,
            full_name,
            birth_date,
            gender,
            code,
            phone
        };

        patients[patientIndex] = newPatient;
        res.status(200).json(success(200, patients, `Patient ${id} Updated...`))
    }      
    else{
        res.status(404).json(error(404,"Patient Not Found Can't Updating..."))

    } 
}

const getHistoryOfPatient = (req, res)=>{
    const patientId = req.params.id;
    
    var patientHistory = history.filter(el => el.patient_id == patientId)
    if(patientHistory){

        return res.status(200).json(success(200,patientHistory, "Ok"))
    }else{
        return res.status(404).json(error(404, "Not Found"))
    }

}

const createPatients = (req, res)=>{
    let {id, full_name, birth_date, gender, code, phone} = req.body
    let newPatient = {
        id,
        full_name,
        birth_date,
        gender,
        code,
        phone
    };
    patients.push(newPatient)
    res.status(201).json(success(201, newPatient, "Your Patient Created"))

}


module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatients
}