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
const getAllPatients = (req, res)=>{
    return res.status(200).json(success(200,patients,"Success"))
}
const getPatientById = (req, res)=>{
    const id = req.params.id;
    // TO-DO
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    // TO-DO
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    // TO-DO
    return res.status(200).json(success(200,{},"Ok"))
}

module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient
}