const axios = require('axios');
const { API_KEY } = process.env;
const { Race, Temperament } = require ('../db')

const getApi = async () => {    
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiDog = response.data;
    const dataApi =apiDog?.map(dog => {
        let weight = dog.weight.metric?.split('-');
        let height = dog.weight.metric?.split('-');

        let height_min = parseInt(height[0]);
        let height_max = parseInt(height[1]);
        
        let weight_min = parseInt(weight[0]);
        let weight_max = parseInt(weight[1]);
        return {
            id: dog.id,
            name: dog.name,
            temperament: dog.temperament ? dog.temperament : 'Friendly, Intelligent, Gentle',
            height_min: height_min ? height_min : 1,
            height_max: height_max ? height_max : 89,
            weight_min: weight_min ? weight_min : 98,
            weight_max: weight_max ? weight_max : 1,
            life_span: dog.life_span,
            image: dog.image.url
        }
    });

    return dataApi;
}

const getBd = async () => {
    const dbDog = await Race.findAll({
        include: [
            {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        ]
    });

    dbDog.map(dog =>{
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image,
            height_min: dog.height_min,
            height_max: dog.height_max,
            weight_min: dog.weight_min,
            weight_max: dog.weight_max,
            life_span: dog.life_span,
            temperament: dog.dataValues.Temperaments.map(temp => temp.name).join(', ')
        }
    })
    return dbDog;
}

const totalDogs = async () => {
    let apiData = await getApi();
    let bdData = await getBd();

    let allData = apiData.concat(bdData);
    return allData;
}

const getDogs = async (req, res) => {
    const { name } = req.query;
    const allDogs = await totalDogs();

    try {
        if (name) {
            const nameDog = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));

            nameDog.length ? res.status(200).send(nameDog) : res.status(404).send(`Dog breed: ${name} not exist`);

        } else res.status(200).send(allDogs);

    } catch(error) {
        res.status(404).send({error: error.message});
    }    
};

module.exports = { 
    getDogs,
    getApi,
    getBd,
    totalDogs };