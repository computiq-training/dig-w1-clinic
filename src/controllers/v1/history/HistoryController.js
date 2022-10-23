const { success, error } = require('../../../utils/responser')
const history = [
    {
        id: 1,
        patient_id: 1,
        date: "10/10/2022",
        report: "Bla Bla Bla Bla",
        prescription: [
            {
                id: 1,
                name: "Panadol",
                dose: "Twice each 12 hours",
                note: ""
            },
            {
                id: 2,
                name: "Aspirin",
                dose: "Once at morning",
                note: ""
            }
        ]
    },
    {
        id: 2,
        patient_id: 2,
        date: "11/10/2022",
        report: "Bla Bla Bla Bla",
        prescription: [
            {
                id: 1,
                name: "Panadol",
                dose: "Twice each 12 hours",
                note: ""
            },
            {
                id: 2,
                name: "Aspirin",
                dose: "Once at morning",
                note: ""
            }
        ]
    },
    {
        id: 3,
        patient_id: 3,
        date: "11/10/2022",
        report: "Bla Bla Bla Bla",
        prescription: [
            {
                id: 1,
                name: "Panadol",
                dose: "Twice each 12 hours",
                note: ""
            },
            {
                id: 2,
                name: "Aspirin",
                dose: "Once at morning",
                note: ""
            }
        ]
    },
]

// TO-DO
// Create history for given patient ID
const createHistoryForP = (req, res) => {
    // TO-DO
    let {
        id,
        patient_id,
        date,
        report,
        prescription
    } = req.body;
    let h = {
        id: id,
        patient_id: patient_id,
        date: date,
        report: report,
        prescription: prescription
    }
    history.push(h)
    return res.status(201).json(success(201, history, "history of patient created 😊"))
}
const getAllHistory = (req, res) => {
    return res.status(200).json(success(200, history, "Success"))
}



module.exports = {
    getAllHistory,
    createHistoryForP
}