const { success, error } = require("../../../utils/responser");
const { history } = require("../history/HistoryController");
let patients = [
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
  const id = parseInt(req.params.id);
  // TO-DO
  console.log(id);
  let p = patients.find((p) => p.id == id);

  if (!p) {
    return res.status(404).json();
  }
  console.log(p);
  return res.status(200).json(success(200, { p }, "Ok"));
};

const deletePatient = (req, res) => {
  const id = parseInt(req.params.id);
  // TO-DO

  let p = patients.find((p) => p.id == id);

  if (!p) {
    return res.status(404).json();
  }

  patients = patients.filter((p) => p.id !== id);
  return res.status(200).json(success(200, { patients }, "Ok"));
};

const updatePatient = (req, res) => {
  const id = parseInt(req.params.id);
  // TO-DO
  let p = patients.find((p) => p.id == id);

  if (!p) {
    return res.status(404).json();
  }
  const { full_name, birth_date, gender, code, phone } = req.body;

  p.full_name = full_name;
  p.birth_date = birth_date;
  p.gender = gender;
  p.code = code;
  p.phone = phone;

  return res.status(200).json(success(200, { p }, "Ok"));
};

const getHistoryOfPatient = (req, res) => {
  const id = req.params.id; // patient id
  // TO-DO
  const patientHistory = history.filter((h) => {
    return h.patient_id == id;
  });

  return res.status(200).json(success(200, patientHistory, "Ok"));
};

const CreatePatient = (req, res) => {
  const { full_name, birth_date, gender, code, phone } = req.body;

  let p = {
    id: patients.length + 1,
    full_name,
    birth_date,
    gender,
    code,
    phone,
  };

  patients.push(p);
  return res.status(200).json(success(200, patients, "Success"));
};

module.exports = {
  getAllPatients,
  getPatientById,
  deletePatient,
  updatePatient,
  getHistoryOfPatient,
  CreatePatient,
};
