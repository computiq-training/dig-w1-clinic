const {success, error} = require('../../../utils/responser')
const PatientController = require('../patients/PatientController')

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


// Create history for given patient ID
const createHistoryForP = (req, res) => {
    const patient_id = req.params.id;
    let {id, date, prescription, report} = req.body;
    let newHistory = {
        id: id,
        patient_id: patient_id,
        date: date,
        report: report,
        prescription: prescription
    }
    history.put(newHistory)
    return res.status(200).json(success(200, history, "Success"))

}
const getAllHistory = (req, res) => {
    return res.status(200).json(success(200, history, "Success"))
}

const getAllhistory = (req, res) => {
    return res.status(200).json(success(200, history, "success"))
}


const gethistoryofpatient = (req, res) => {
    const id = req.params.id;
}

const deletehistory = (req, res) => {
    const id = req.params.id;

}
const updatehistory = (req, res) => {
    const id = req.params.id;

}


module.exports = {
    getAllHistory,
    createHistoryForP,
    getAllhistory,
    gethistoryofpatient,
    deletehistory,
    updatehistory
}

//most of the code above was written by me during the lecture , i know some of it is not required  <3