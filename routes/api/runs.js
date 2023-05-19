const express = require('express');
const router = express.Router();
const runsCtrl = require('../../controllers/api/runs');

// GET /runs 
router.get('/runs', runsCtrl.index);

// POST /runs 
router.post('/runs', runsCtrl.addRun);

module.exports = router;