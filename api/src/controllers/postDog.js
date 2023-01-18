const { Race, Temperament } = require ('../db')

const createDog = async ({ temperament, name, height_min, height_max, weight_min, weight_max, life_span, image, created }) => {

    let createdDog = await Race.create({ 
        name,
        height_min,
        height_max,
        weight_min, 
        weight_max, 
        life_span,
        image,
        created 
    });

    
    createdDog.addTemperament(temperament);
}

const postDog = async (req, res) => {
    const {
        name,
        temperament,
        height_min,
        height_max,
        weight_min, 
        weight_max, 
        life_span,
        image,
        created
    } = req.body;

    try {      
        if (!temperament || !name || !height_min || !height_max || !weight_min || !weight_max || !life_span) {
            return res.status(404).send('Missing data');
        }

        else {
            const newDog = createDog(req.body);
            return res.status(201).send('Your dog has been successfully created');  
        }
    } catch(error) {
        res.status(404).send({error: error.message})
    }
}

module.exports = { postDog };