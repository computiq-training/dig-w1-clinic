const {success, error} = require('../../../utils/responser')
const {history}=require("../../../utils/Resources")
const {patients} = require("../../../utils/Resources");

const getAllPatients = (req, res)=>{
    return res.status(200).json(success(200,patients,"Success"))
}
const getPatientById = (req, res)=>{
    const id = req.params.id;
    let p = patients.find((p) => p.id == id);
    if (p)
        return res.status(200).json(success(200,p,"Success"))
    else
        return res.status(404).json(error(404,"patient not found"))

    // TO-DO
}

const deletePatient = (req, res)=>{
    const id = req.params.id;
    let p = patients.findIndex((p) => p.id == id);
    let filterd_history = history.filter(list => list['patient_id'] == id);
    if (p>-1) {
        patients.splice(p, 1);
        if (filterd_history.length > 0) {
            for (let x in filterd_history) {
                let h = history.findIndex((p) => p.patient_id == filterd_history[x].id);
                history.splice(h, 1);
            }}
        return res.status(200).json(success(200, p, "patient deleted"))
    }
    else
        return res.status(404).json(error(404,"patient not found"))



    // TO-DO
}

const updatePatient = (req, res)=>{
    const id = req.params.id;
    let p = patients.findIndex((p) => p.id == id);
    if (p>-1) {
        const {
            full_name,
            birth_date,
            gender,
            code,
            phone
        } = req.body;
        let newPatient = {
            id: id,
            full_name: full_name,
            birth_date: birth_date,
            gender: gender,
            code: code,
            phone: phone
        };
        patients[p] = newPatient;
        return res.status(200).json(success(200,newPatient,"Success"))

        // TO-DO
    }
    else {
        return res.status(404).json(error(404,"patient not found"))
    }
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    filterd_history=history.filter(list => list['patient_id'] == id);
    if (filterd_history.length>0)
        return res.status(200).json(success(200,filterd_history,"Ok"))
    else
        return res.status(404).json(error(404,"patient not found"))
}
const createPatient=(req, res)=>{
    let id = patients.at(-1).id + +1
    const {
        full_name,
        birth_date,
        gender,
        code,
        phone
    } = req.body;
    let Patinet = {
        id: id,
        full_name: full_name,
        birth_date: birth_date,
        gender: gender,
        code: code,
        phone: phone
    };
    patients.push(Patinet);
    return res.status(200).json(success(200,Patinet,"Success"))
}
module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient,
}
