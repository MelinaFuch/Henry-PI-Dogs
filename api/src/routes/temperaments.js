const { Router } = require('express');
const db = require('../db');
const router = Router();
const {getTemperaments} = require('../controllers/getTemperaments')

router.get('/', getTemperaments);

module.exports = router;