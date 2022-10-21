const {success, error} = require('../../../utils/responser');
const { history } = require("../history/HistoryController");

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
    let patient = patients.find((item)=> item.id == id)
    

    res.status(200).json(success(200, patient,"suecsssfully"))
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    
        let patientIndex = patients.findIndex((item)=> item.id == id)
        if(patientIndex>-1){
            patients.splice(patientIndex,1)
            res.status(200).json(success(200, patients,"post deleted")) 
        }
        else{      return res.status(404).json(error(404, `patient with id ${id} can't deleted`));
    }
    
}


const updatePatient = (req, res) => {
    const id = req.params.id;
    let patientIndex = patients.findIndex((item) => item && item.id == id);
    if (patientIndex > -1) {
        let updatePatient = {

            id: id,
            full_name: req.body.full_name,
            birth_date: req.body.birth_date,
            gender: req.body.gender,
            code: req.body.code,
            phone: req.body.phone,
    };
    
    patients[patientIndex] = updatePatient;
    if(updatePatient){
    return res.status(200).json(success(200, patients, `patient with id ${id} deleted successfully`))};
    } else{
      return res.status(404).json(error(404, `patient with id ${id} not found`));
  }};


    const getHistoryOfPatient = (req, res) => {
    const id = req.params.id;
    const patientHistory = history.find((item) => item.patient_id == id);
    if (patientHistory){

       return res.status(200).json(success(200, patientHistory, "Ok"));}
    else{ return res.status(404).json(error(404, "not found"))};
  };


    const createpateintForP=(req, res)=>{
        const id = req.params.id;
        let patientcreate={
        id:req.body.id,
        full_name:req.body.full_name,
        birth_date:req.body.birth_date,
        gender:req.body.gender,
        code:req.body.code,
        phone:req.body.phone
        };
        patients.push(patientcreate)
        if(patientcreate){
            return res.status(200).json(success(200), patients,"patients  created")

        }else{
            return res.status(404).json(error(404, "sorry something error "))

        }
    
    }


module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createpateintForP
}