const Patient = require('../../../models/Patient')
const {success, error} = require('../../../utils/responser')

const getAllPatients = async (req, res)=>{
    let data = await Patient.find()
    return res.status(200).json(success(200,data,"Success"))
}
const getPatientById = (req, res)=>{
    const id = req.params.id;
    // TO-DO
    Patient.findById(id)
    .then((r)=>{
        console.log('retreiving')
        return res.status(200).json(success(200,r,"Success"))

    })
    .catch((e)=>{
        console.error(e)
    })
}

const deletePatient = async (req, res)=>{
    const id = req.params.id;
    // TO-DO
    try {
        const p = await Patient.findByIdAndDelete(id);
        return res.status(200).json(success(200,p,"Ok"))
    } catch (error) {
        return res.status(500).json(error(500,"Server Side Error"))
    }

}

const updatePatient =  async (req, res)=>{
    const id = req.params.id;
    // TO-DO
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
    try {
        const p = await Patient.findByIdAndUpdate(id,{
            full_name:req.body.full_name
        })
        return res.status(200).json(success(200,p,"Ok"))
    } catch (error) {
        return res.status(500).json(error(500,"Server Side Error"))
        
    }
}

const getHistoryOfPatient = (req, res)=>{
    const id = req.params.id; // patient id
    // TO-DO
    return res.status(200).json(success(200,{},"Ok"))
}

const createPatient = async (req, res)=>{
    let bdy = req.body
    const p = new Patient(bdy)
    try {
        const returedObject = await p.save();
        return res.status(200).json(success(200, returedObject,"OK"))
    } catch (error) {
        return res.status(500).json(error(500,"Something went wrong"))
    }
}

const searchPatients = async (req, res)=>{
    const full_name = req.query.keyword
    let data = await Patient.find({
        full_name:{
            $regex: `.*${full_name}.*`
        }
    })
    if(data)
        return res.status(200).json(success(200, data,"OK"))
    
    return res.status(404).json(success(404,"No Results"))
    
}
module.exports = {
    getAllPatients,
    getPatientById,
    deletePatient,
    updatePatient,
    getHistoryOfPatient,
    createPatient,
    searchPatients
}