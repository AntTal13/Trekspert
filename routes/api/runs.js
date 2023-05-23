const express = require('express');
const router = express.Router();
const runsCtrl = require('../../controllers/api/runs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /runs 
router.get('/', runsCtrl.index);

// POST /runs 
router.post('/', ensureLoggedIn, runsCtrl.addRun);

// GET /runs/user
router.get('/user', ensureLoggedIn, runsCtrl.forUser);

// GET /runs/:id
router.get('/:id', ensureLoggedIn, runsCtrl.show);

// DELETE /runs/:id
router.delete('/:id', ensureLoggedIn, runsCtrl.delete);


module.exports = router;