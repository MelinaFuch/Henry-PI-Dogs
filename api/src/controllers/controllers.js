const axios = require('axios');
const { Race, Temperament } = require ('../db')


const getAPI = async () => {    
    let response = await axios.get('https://api.thedogapi.com/v1/breeds');
    let apiDog = response.data.map((dog) => {        
        return {
            id: dog.id,
            name: dog.name,
            temperament: dog.temperament,
            height: dog.height?.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span,
            image: dog.image.url
        }
    });
    return apiDog;
}

const getBD = async () => {
    return dbDog = await Race.findAll({
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
}

const getDogs = async () => {
    let apiData = await getAPI();
    let bdData = await getBD();

    let allData = apiData.concat(bdData);
    return allData;
}

const getTemperaments = async () => {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const apiTemp = await response.data.map((dog) => dog.temperament).toString().split(',');

    const set = new Set(apiTemp);
    const temps = [...set];

    const temperaments = temps.filter(temp => temp !== "").forEach(async(temp) => {
        let x = temp.trim();
        await Temperament.findOrCreate({where: {name: x}})
    });   

    const allTemperaments = await Temperament.findAll();

    return allTemperaments;
}

const postDogs = async ({ temperament, name, height, weight, life_span, image, created }) => {
    let createdDog = await Race.create({ name, height, weight, life_span, image, created });

    let findTemperaments =  await Temperament.findAll({
        where: { name: temperament }
    });

    const temperaments = findTemperaments.map(temp => temp.dataValues.name);

    createdDog.addTemperament(temperaments);
}

module.exports = {
    getBD,
    getAPI,
    getDogs,
    postDogs,
    getTemperaments
}