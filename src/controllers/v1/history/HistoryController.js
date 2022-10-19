const { success, error } = require('../../../utils/responser')
// const { patients } = require('../patients/PatientController')

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

const createHistoryForP = (req, res) => {
    const id = req.params.id
    let newHistory = req.body
    newHistory.patient_id = id
    // console.log(patients);
    // let index = patients.findIndex(el => el.id == id);

    // if (index > -1) {
        history.push(newHistory)
        return res.status(200).json(success(200, newHistory, "Success"))
    // } else {
        return res.status(404).json(error(404, "Not Found"))
    // }
}
const getAllHistory = (req, res) => {
    return res.status(200).json(success(200, history, "Success"))
}



module.exports = {
    getAllHistory,
    createHistoryForP,
    history,
}