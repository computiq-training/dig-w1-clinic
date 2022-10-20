const express = require('express')
const historyRouter = express.Router()
const {getAllHistory,createHistoryForP} = require('../../controllers/v1/history/HistoryController')


historyRouter.get('/', getAllHistory);
historyRouter.post('/:id/patient', createHistoryForP);



module.exports = historyRouter;