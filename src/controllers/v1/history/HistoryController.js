const {success, error} = require('../../../utils/responser');
const {response} = require("express");
const {patients}=require("../../../utils/Resources");
const {history}=require("../../../utils/Resources");
// TO-DO
// Create history for given patient ID
const createHistoryForP=(req, res)=>{
    const patient_id = req.params.id;//patient
    let p = patients.find((p) => p.id == patient_id);
    let id = history.at(-1).id + +1;
    if (p) {
        let {date, report, prescription} = req.body;
        let History = {
            patient_id: patient_id,
            id: id,
            date: date,
            report: report,
            prescription: prescription,
        }
        history.push(History);
        res.status(201).json(success(201, History, "History Created"))
    }
    else res.status(404).json(error(404,'patient not found'))
}
const getAllHistory = (req, res)=>{
    return res.status(200).json(success(200,history,"Success"))
}



module.exports = {
    getAllHistory,
    createHistoryForP,

}