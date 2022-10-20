const {success, error} = require('../../../utils/responser')
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
    let PatientById = PatientById.find((item)=> item.id == id)
    if(!PatientById)
        response.status(404).json('No record for this patient')
    response.status(200).json(PatientById)
    
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    let deletePatientIndex = Patients.findindex((item)=> item.id == id)
    if(deletePatientIndex > -1)
        patients.splice(deletePatientIndex,1)
        response.status(404).json('No record for this patient')
        response.status(200).json(success(200, patients,"Current patient entry deleted"))
    // if(deletePatientByIdIndex > -1)
    // {
    //     patients.splice(deletePatientByIdIndex,1)
    //     response.status(200).json(success(200, patients,"Current patient entry deleted"))
    // }
    // else{
    //     response.status(404).json('No record for this patient')
    // }
        
    
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    const {email} = req.body
    let updatePatientIndex = Patients.findIndex((item)=> item.id == id)
    if(updatePatientIndex > -1)
    {
        let newPatient = {
            id:id,
            full_name:full_name,
            birth_date:birth_date,
            gender:gender,
            code:code,
            phone:phone,
            email: email
        }
    }
        patients[updatePatientIndex] = newPatient; 

        response.status(404).json('No record for this patient')
        response.status(200).json(success(200, patients,"Current patient entry deleted"))
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    // TO-DO
    let HistoryOfPatient = history.find((item)=> item.id == id)
    if(!HistoryOfPatient)
        response.status(404).json('No history for this patient')
    response.status(200).json(HistoryOfPatient)


    return res.status(200).json(success(200,{},"Ok"))
}

//create new patient
const addNewPatient = (req, res)=>{
    let {
        id, full_name, birth_date,gender, code, phone
    } = request.body
    patients.push({
        id:id,
        full_name:full_name,
        birth_date:birth_date,
        gender:gender,
        code:code,
        phone:phone
    })
    return res.status(200).json(success(200,patients,"New patient case created"))

}

module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    addNewPatient
}