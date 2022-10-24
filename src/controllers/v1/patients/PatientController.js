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
    let patient=patients.find((item)=>item && item.id==id);
    if(patient){
        return res.status(200).json(success(200,patients,"Success"));
    }
    else {

     return res.status(404).json(error(404, `patient with id ${id} not found`));
    }
};

const deletePatient = (req, res)=>{
    const id = req.params.id;
    let deletePatientindex = patients.deletePatientindex((item)=>item && item.id == id)
    if( deletePatientindex> -1)
    {
        patients.splice(deletePatientindex,1)
        return res.status(200).json(success(200, patients, `Success Deleted Patient ID ${id}`)) 
    }
    else{
        return res.status(404).json(error(404, `Not Found Patient ID ${id}`)) 
    }
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    let p = patients.findIndex( (item)=>item.id=id)
    if (p > -1) {
        let p2 = {
            id:id,
            full_name: req.body.full_name,
            number: req.body.number,
            gender: req.body.gender,
            birth_date: req.body.birth_date,
            code: req.body.code,
           
        }
        patients[p] = p2;

        return res.status(200).json(success(200, patients[p], "true"))
    } else {
        return res.status(404).json(error(404, "error"))
    }
}
const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    const patientHistory=history.find((item)=>item.patient_id=id)
    if( patientHistory){
        return res.status(200).json(success(200,patientHistory,"Ok"))
    }
    else{
        return res.status(404).json(error(404, "error"))
    }
}
const createPatient = (req, res) => {
    let p1 = {
      id: req.body.id,
      full_name: req.body.full_name,
      number: req.body.number,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      code: req.body.code,
    };
    patients.push(p1);
return res.status(200).json(success(200, patients, `created successfully`));
};   


module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient

}