const express = require('express');
const router = express.Router();
const runsCtrl = require('../../controllers/api/runs');

// GET /runs 
router.get('/', runsCtrl.index);

// POST /runs 
router.post('/', runsCtrl.addRun);

// GET /runs/user
router.get('/user', runsCtrl.forUser);

// GET /runs/:id
router.get('/:id', runsCtrl.show);


module.exports = router;