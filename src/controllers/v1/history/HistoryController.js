const { report } = require('../../../routes/v1/patients');
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
    const id = req.params.id;
    let patientHistory={
        id: req.body.id,
        patient_id: id,
        date: req.body.date,
        report: req.body.report,
        prescription: req.body.prescription
    };
    history.push(patientHistory)
    return res.status(200).json(success(200), history,"patients history created")
}

const getAllHistory = (req, res)=>{
    return res.status(200).json(success(200,history,"Success"))
}



module.exports = {
    getAllHistory,
    createHistoryForP,
    history
}