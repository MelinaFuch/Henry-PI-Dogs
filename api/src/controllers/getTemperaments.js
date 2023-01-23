const axios = require('axios');
const { API_KEY } = process.env;
const { Race, Temperament } = require ('../db');

const totalTemperaments = async () => {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiTemp = await response.data.map((dog) => dog.temperament).toString().split(',');

    const set = new Set(apiTemp);
    const temps = [...set];

    const temperaments = temps.filter(temp => temp !== "");

    temperaments.map(async(temp) => {
        let x = temp.trim();
        await Temperament.findOrCreate({where: {name: x}})
    });

    const allTemperaments = await Temperament.findAll();

    return allTemperaments;
}

const getTemperaments = async (req, res) => {
    try{
        const dbTemperament = await Temperament.findAll()
        
        if (!dbTemperament.length) {
            dbTemperament = await totalTemperaments();
            return res.status(200).send(dbTemperament);
        }
        return res.status(200).send(dbTemperament);
    } catch(error){
        res.status(404).send({error: error.message})
    }  
}

module.exports = { getTemperaments };