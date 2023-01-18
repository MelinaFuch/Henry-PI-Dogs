const { Router } = require('express');
const db = require('../db');
const router = Router();
const {getDogs} = require('../controllers/getDogs');
const {getDogId} = require('../controllers/getDogId');
const {postDog} = require('../controllers/postDog');

router.get('/', getDogs);
router.get('/:idRaza', getDogId);
router.post('/', postDog);

module.exports = router;