const { Router } = require('express');
const { Race, Temperament } = require('../db');
const axios = require('axios');
const { getDogs, getTemperaments, postDogs } = require('../controllers/controllers')

//const { JSON } = require('sequelize');

// Importar todos los routers;

const router = Router();

// Configurar los routers

router.get('/dogs', async (req, res) => {
  const { name } = req.query;
  const allDogs = await getDogs();

  try {
    if (name) {
      const nameDog = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));

      nameDog.length ? res.status(200).send(nameDog) : res.status(404).send(`Dog breed: ${name} not exist`);

    } else res.status(200).send(allDogs);

  } catch(error) {
    res.status(404).send({error: error.message});
  }    
});

router.get('/dogs/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getDogs();

    try {      
      if (idRaza) {
        const findDog = allDogs.filter(dog => dog.id == idRaza);

        if (findDog) return res.status(200).send(findDog);
        else res.status(404).send(`Dog breed: ${idRaza} not exist`);
      }
    } catch (error) {
      res.status(404).send({error: error.message});
    }
})

router.get('/temperaments', async (req, res) => {
  try{    
    const dbTemperaments = await Temperament.findAll();

    if (dbTemperaments) return res.status(200).send(dbTemperaments);
    else {
      dbTemperaments = getTemperaments();
      return res.status(200).send(dbTemperaments);
    }
  } catch(error){
    res.status(404).send({error: error.message})
}  
})

router.post('/dogs', async (req, res) => {
  const {
    name,
    temperament,
    height,
    weight,
    life_span,
    image,
    created
  } = req.body;

  try {      
    if (!temperament || !name || !height || !weight || !life_span ) return res.status(404).send('Missing data');

    else {
      const createDog = postDogs(req.body);
      return res.status(201).send('Your dog has been successfully created');  
    }
  } catch(error) {
      res.status(404).send({error: error.message})
  }
})

module.exports = router;