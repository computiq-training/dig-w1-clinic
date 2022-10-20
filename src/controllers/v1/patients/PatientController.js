const { success, error } = require("../../../utils/responser");
const { history } = require("../history/HistoryController");
const patients = [
  {
    id: 1,
    full_name: "Adel Ahmed",
    birth_date: "19/10/2022",
    gender: "male",
    code: "100",
    phone: "+9647711332225",
  },
  {
    id: 2,
    full_name: "Sara Ali",
    birth_date: "01/10/2000",
    gender: "female",
    code: "101",
    phone: "+9647711332226",
  },
  {
    id: 3,
    full_name: "Saif Ahmed",
    birth_date: "16/05/1977",
    gender: "male",
    code: "102",
    phone: "+9647711332227",
  },
];
const getAllPatients = (req, res) => {
  return res.status(200).json(success(200, patients, "Success"));
};
const getPatientById = (req, res) => {
  const id = req.params.id;
  let patientIndex = patients.findIndex((item) => item.id == id);
  if (patientIndex > -1) {
    res
      .status(200)
      .json(success(200, patients[patientIndex], "Patient founded"));
  } else {
    res.status(404).json(error(404, "Patient not found at this id"));
  }
};

const deletePatient = (req, res) => {
  const id = req.params.id;
  let patientIndex = patients.findIndex((item) => item.id == id);
  if (patientIndex > -1) {
    let slicedPatient = patients.splice(patientIndex, 1);
    res
      .status(200)
      .json(
        success(200, slicedPatient, "The patient you want to delete is gone")
      );
  } else {
    res.status(404).json(error(404, "Patient not found"));
  }
};

const updatePatient = (req, res) => {
  const id = req.params.id;
  let { full_name, birth_date, gender, code, phone } = req.body;
  let patientIndex = patients.findIndex((item) => item.id == id);
  if (patientIndex > -1) {
    let update = {
      id: id,
      full_name: full_name,
      birth_date: birth_date,
      gender: gender,
      code: code,
      phone: phone,
    };
    patients[patientIndex] = update;

    res.status(200).json(success(200, update, "User updated"));
  } else {
    res.status(404).json(error(404, "Patient not found"));
  }
};

const getHistoryOfPatient = (req, res) => {
  const id = req.params.id; // patient id
  let historyOfPatient = history.filter((item) => item.id == id);
  if (history.length > 0) {
    return res.status(200).json(success(200, historyOfPatient, "Ok"));
  } else {
    res.status(404).json(error(404, "History not found"));
  }
};
const addNewPatient = (req, res) => {
  let { id, full_name, birth_date, gender, code, phone } = req.body;
  let addPatient = {
    id: id,
    full_name: full_name,
    birth_date: birth_date,
    gender: gender,
    code: code,
    phone: phone,
  };
  let exist = patients.findIndex((item) => item.id == id);
  if (exist == -1) {
    patients.push(addPatient);
    res.status(200).json(success(200, addNewPatient, "Patient added"));
  } else {
    res.status(409).json(error(409, "Patient id already exist"));
  }
};
module.exports = {
  getAllPatients,
  getPatientById,
  deletePatient,
  updatePatient,
  getHistoryOfPatient,
  addNewPatient,
  patients,
};
