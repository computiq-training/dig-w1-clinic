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
    let patient = patients.find((p)=> p.id == Number(id))
    if(!patient){
       return res.status(404).json(error(404,"patient Not Found"))

    } else{
        return res.status(200).json(success(200, patient, "ok"))


    }
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    let patientIndex = patients.findIndex((p)=> p.id == Number(id))
    if(patientIndex > -1)
    {
        patients.splice(patientIndex,1)
        res.status(200).json(success(200, patientIndex, `patient ${id} deleted`))
    }      
    else{
        res.status(404).json(error(404,"patient Not Found and not deleted"))

    }  
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    const {full_name, birth_date, gender, code, phone}= req.body
    let patient = patients.find((p)=> p.id == Number(id))

    if(!patient){
        return res.status(404).json(error(404,"patient Not Found"))

    }else{
         patients.map((p)=>{
            if(p.id == Number(id)){
                p.id = id
                p.full_name = full_name
                p.birth_date= birth_date
                p.gender = gender
                p.code = code
                p.phone = phone
            }
    
            // return patient
        })
        return res.status(200).json(success(200,patient,"Ok"))

    }

   

}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    let history1 = history.find((h)=>(h.patient_id== Number(id)))
    // TO-DO
    return res.status(200).json(success(200,history1,"Ok"))
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
    createPatient,
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient
}