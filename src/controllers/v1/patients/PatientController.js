const {success, error} = require('../../../utils/responser')
const PatientModel = require('../../../models/Patient')

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
        id:1,
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
const getAllPatients = async (req, res)=>{
    const data = await PatientModel.find()
    return res.status(200).json(success(200,data,"Success"))
}
const getPatientById = async (req, res)=>{
    const id = req.params.id;
    // TO-DO
    const p = await PatientModel.findOne({_id:id})
    return res.status(200).json(success(200,p,"Success"))

}

const deletePatient = async (req, res)=>{
    const id = req.params.id;
    // TO-DO
    const deleted = await PatientModel.findOneAndDelete({ _id: id })
    return res.status(200).json(success(200,deleted,"Success"))

}

const updatePatient = async (req, res)=>{
    const id = req.params.id;
    // TO-DO
    let p = await PatientModel.findOne({_id:id})
    p.full_name = req.body.full_name
    try {
    p = await p.save()
    return res.status(200).json(success(200,p,"Success"))
        
    } catch (error) {
    return res.status(500).json(success(500,"Error "+error.message))
        
    }
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    // TO-DO
    return res.status(200).json(success(200,{},"Ok"))
}
const newPatient = async (req, res)=>{
    let bdy = req.body;
    console.log(bdy)
    const P = new PatientModel(bdy)
    try {
        const  returnedP = await P.save()
        return res.status(200).json(success(200,returnedP,"Ok"))

    } catch (error) {
        return res.status(500).json(error(500,"Something went wrong, "+error.message ))
    }
}
module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    newPatient
}