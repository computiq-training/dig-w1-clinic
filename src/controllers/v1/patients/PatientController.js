const { success, error } = require('../../../utils/responser')
const patients = [
    {
        id: 1,
        full_name: "Adel Ahmed",
        birth_date: "19/10/2022",
        gender: "male",
        code: "100",
        phone: "+9647711332225"
    },
    {
        id: 2,
        full_name: "Sara Ali",
        birth_date: "01/10/2000",
        gender: "female",
        code: "101",
        phone: "+9647711332226"
    },
    {
        id: 3,
        full_name: "Saif Ahmed",
        birth_date: "16/05/1977",
        gender: "male",
        code: "102",
        phone: "+9647711332227"
    },

]

const getAllPatients = (req, res) => {
    return res.status(200).json(success(200, patients, "Success"))
}
const getPatientById = (req, res) => {
    const id = req.params.id;
    // TO-DO
    const p = patients.find((item) => item.id == id)
    return res.status(200).json(success(200, p, "Success"))
}

const deletePatient = (req, res) => {
    const id = req.params.id;
    // TO-DO
    const pIndex = patients.findIndex((item) => item.id == id)
    if (pIndex > -1) {
        patients.splice(pIndex, 1)
        return res.status(200).json(success(200, patients, "patient deleted 👍"))
    }

}

const updatePatient = (req, res) => {
    const id = req.params.id;
    // TO-DO
    const { full_name, birth_date, gender, code, phone } = req.body;
    const pIndex = patients.findIndex((item) => item.id == id)
    if (pIndex > -1) {
        let newUpdate = {
            id: id,
            full_name: full_name,
            birth_date: birth_date,
            gender: gender,
            code: code,
            phone: phone
        };
        patients[pIndex] = newUpdate;
        return res.status(200).json(success(200, patients, "patient Updated 👌"))
    }
}

const getHistoryOfPatient = (req, res) => {
    const patient_id = req.params.patient_id; // patient id
    // TO-DO
    const p = history.find((item) => item.id == patient_id)
    return res.status(200).json(success(200, p, "Ok"))
}
const createPatient = (req, res) => {
    let {
        id, full_name, birth_date, gender, code, phone
    } = req.body;
    let patient = {
        id: id,
        full_name: full_name,
        birth_date: birth_date,
        gender: gender,
        code: code,
        phone: phone
    }
    patients.push(patient)
    return res.status(201).json(success(201, patient, "patient created 😊"))
}

module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient
}