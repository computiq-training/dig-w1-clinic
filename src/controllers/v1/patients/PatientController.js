<<<<<<< HEAD
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
=======
const Patient = require('../../../models/Patient')
const {success, error} = require('../../../utils/responser')

const getAllPatients = async (req, res)=>{
    let data = await Patient.find()
    return res.status(200).json(success(200,data,"Success"))
}
const getPatientById = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    Patient.findById(id)
    .then((r)=>{
        console.log('retreiving')
        return res.status(200).json(success(200,r,"Success"))

    })
    .catch((e)=>{
        console.error(e)
    })
>>>>>>> 06e24920ecd071b1f4b706c7019b8e35b8f1de54
}

const deletePatient = async (req, res)=>{
    const id = req.params.id;
<<<<<<< HEAD
    
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
=======
    // TO-DO
    try {
        const p = await Patient.findByIdAndDelete(id);
        return res.status(200).json(success(200,p,"Ok"))
    } catch (error) {
        return res.status(500).json(error(500,"Server Side Error"))
    }

}

const updatePatient =  async (req, res)=>{
    const id = req.params.id;
    // TO-DO
    // let p = await Patient.findOne({
    //     _id:id
    // })
    // p.full_name = req.body.full_name
    // try {
    //     await p.save()
    //     return res.status(200).json(success(200,p,"Ok"))
        
    // } catch (error) {
    //     return res.status(500).json(success(500,"Server Side Error"))
        
    // }
    try {
        const p = await Patient.findByIdAndUpdate(id,{
            full_name:req.body.full_name
        })
        return res.status(200).json(success(200,p,"Ok"))
    } catch (error) {
        return res.status(500).json(error(500,"Server Side Error"))
        
    }
}
>>>>>>> 06e24920ecd071b1f4b706c7019b8e35b8f1de54


const createPatient = async (req, res)=>{
    let bdy = req.body
    const p = new Patient(bdy)
    try {
        const returedObject = await p.save();
        return res.status(200).json(success(200, returedObject,"OK"))
    } catch (error) {
        return res.status(500).json(error(500,"Something went wrong"))
    }
}

const searchPatients = async (req, res)=>{
    const full_name = req.query.keyword
    let data = await Patient.find({
        full_name:{
            $regex: `.*${full_name}.*`
        }
    })
    if(data)
        return res.status(200).json(success(200, data,"OK"))
    
    return res.status(404).json(success(404,"No Results"))
    
}
module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
<<<<<<< HEAD
    createpateintForP
=======
    createPatient,
    searchPatients
>>>>>>> 06e24920ecd071b1f4b706c7019b8e35b8f1de54
}