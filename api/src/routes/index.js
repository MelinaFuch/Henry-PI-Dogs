const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerDog = require('./dogs');
const routerTemperament = require('./temperaments');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', routerDog);
router.use('/temperaments', routerTemperament);

module.exports = router;