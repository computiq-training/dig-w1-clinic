const {success, error} = require('../../../utils/responser')
const history = [
    {
        id:1,
        patient_id:1,
        date:"10/10/2022",
        report:"Bla Bla Bla Bla",
        prescription:[
            {
                id:1,
                name:"Panadol",
                dose:"Twice each 12 hours",
                note:""
            },
            {
                id:2,
                name:"Aspirin",
                dose:"Once at morning",
                note:""
            }
        ]
    },
    {
        id:2,
        patient_id:2,
        date:"11/10/2022",
        report:"Bla Bla Bla Bla",
        prescription:[
            {
                id:1,
                name:"Panadol",
                dose:"Twice each 12 hours",
                note:""
            },
            {
                id:2,
                name:"Aspirin",
                dose:"Once at morning",
                note:""
            }
        ]
    },
    {
        id:3,
        patient_id:3,
        date:"11/10/2022",
        report:"Bla Bla Bla Bla",
        prescription:[
            {
                id:1,
                name:"Panadol",
                dose:"Twice each 12 hours",
                note:""
            },
            {
                id:2,
                name:"Aspirin",
                dose:"Once at morning",
                note:""
            }
        ]
    },
]

// TO-DO
// Create history for given patient ID
const createHistoryForP=(req, res)=>{
    const idPatient = req.params.id;//patient
    let {date, report, prescription} = req.body
    let newHistory = {

        id:idPatient,
        patient_id:idPatient,
        date,
        report,
        prescription
    };
    history.push(newHistory)
    res.status(201).json(success(201, newHistory, "Your History For Patient Created"))

}

const getAllHistory = (req, res)=>{
    return res.status(200).json(success(200,history,"Success"))
}


module.exports = {
    getAllHistory,
    createHistoryForP,
    history
}