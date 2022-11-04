// const express = require('express')
// const router = express.Router()
// const {getAllHistory} = require('../../controllers/v1/history/HistoryController')


// router.get('/', getAllHistory);
// module.exports = router;

const express = require('express')
const router = express.Router()
const {
    getAllhistory,
    gethistoryofpatient,
    deletehistory,
    updatehistory,
    createHistoryForP
} = require('../../controllers/v1/history/HistoryController')
router.get('/patients', getAllhistory);
router.get('/post/:id', createHistoryForP);

router.get('/patients/:id', gethistoryofpatient);
router.delete('/patients/:id', deletehistory);
router.put('/patients/:id', updatehistory);

module.exports =
    router
;