const Patient = require('../../../models/Patient')
const {success, error} = require('../../../utils/responser')
const HistoryController = require('../history/HistoryController')
const patients = [
    {
        id: 1,
        full_name: "dhay salih",
        age: "22",
        gender: "female",
        code: "a1",
        phone_number: "+9647712345678"
    },
    {
        id: 2,
        full_name: "yemam salih",
        age: "26",
        gender: "female",
        code: "a2",
        phone_number: "+9647712385678"
    },
    {
        id: 1,
        full_name: "suhaib salih",
        age: "31",
        gender: "male",
        code: "a3",
        phone_number: "+9647762345678"
    },

]
//---------------------------------------------------------------------------------------
const getAllPatients = async (req, res) => {
    let data = await Patient.find()
    return res.status(200).json(success(200, data, "Success"))
}
//---------------------------------------------------------------------------------------
const getPatientById = (req, res) => {
    const id = req.params.id;

    let patient = patients.find((item) => item.id === id)
    if (!patient)
        return res.status(404).json(error(404, `patient not Found ! `))
    else
        return res.status(200).json(success(200, patient, `Success`))
}
//---------------------------------------------------------------------------------------
const deletePatient = async (req, res) => {
    const id = req.params.id;

    // try {
    //     const p = await Patient.findByIdAndDelete(id);
    //     return res.status(200).json(success(200, p, "Ok"))
    // } catch (error) {
    //     return res.status(500).json(error(500, "Server Side Error"))
    // }
    let patientIndex = patients.findIndex((item) => item && item.id === id);
    if (patientIndex > -1) {
        patients.splice(patientIndex, 1);
        return res.status(200).json(success(200, patients, `success`)
        );
    } else
        return res.status(404).json(error(404, `patient not Found ! `));

}
//---------------------------------------------------------------------------------------
const updatePatient = async (req, res) => {
    const id = req.params.id;

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
    // try {
    //     const p = await Patient.findByIdAndUpdate(id, {
    //         full_name: req.body.full_name
    //     })
    //     return res.status(200).json(success(200, p, "Ok"))
    // } catch (error) {
    //     return res.status(500).json(error(500, "Server Side Error"))
    //
    // }
    const {full_name, birth_date, gender, code, phone} = req.body
    let patientIndex = patients.findIndex((item) => item.id === id)
    if (patientIndex > -1) {
        patients[patientIndex] = {
            id: id,
            full_name: full_name,
            birth_date: birth_date,
            gender: gender,
            code: code,
            phone: phone
        };
        return res.status(200).json(success(200, patients[patientIndex], `Success`))
    } else {
        return res.status(404).json(error(404, `patient not Found !`))
    }
}
//---------------------------------------------------------------------------------------

const getHistoryOfPatient = (req, res) => {
    const id = req.params.id; // patient id

    let history = HistoryController.history
    history = history.find((item) => item.patient_id === id)
    if (!history)
        return res.status(404).json(error(404, `history not Found !`))
    else
        return res.status(200).json(success(200, history, `Success`))
}

//---------------------------------------------------------------------------------------
const createPatient = (req, res) => {

    let {
        id, full_name, birth_date, gender, code, phone
    } = req.body
    let patient = {
        id: id,
        full_name: full_name,
        birth_date: birth_date,
        gender: gender,
        code: code,
        phone: phone
    }
    patients.push(patient)
    return res.status(201).json(success(200, patient, "added patient Successfully"))
}
//---------------------------------------------------------------------------------------
const searchPatients = async (req, res) => {
    const full_name = req.query.keyword
    let data = await Patient.find({
        full_name: {
            $regex: `.*${full_name}.*`
        }
    })
    if (data)
        return res.status(200).json(success(200, data, "OK"))

    return res.status(404).json(success(404, "No Results"))

}
//---------------------------------------------------------------------------------------
module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient,
    searchPatients
}