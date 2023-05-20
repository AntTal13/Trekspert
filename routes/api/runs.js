const express = require('express');
const router = express.Router();
const runsCtrl = require('../../controllers/api/runs');

// GET /runs 
router.get('/runs', runsCtrl.index);

// POST /runs 
router.post('/runs', runsCtrl.addRun);

// GET /runs/:id
router.get('/runs/:id', runsCtrl.show);

// GET /runs/user
router.get('/runs/user', runsCtrl.forUser);

module.exports = router;