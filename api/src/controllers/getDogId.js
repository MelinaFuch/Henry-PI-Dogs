const {getApi, getBd, totalDogs} = require('./getDogs');

const getDogId = async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await totalDogs();

    try {      
        if (idRaza) {
            const findDog = allDogs.filter(dog => dog.id == idRaza);

            findDog.length ? res.status(200).send(findDog) : res.status(404).send(`Dog breed: ${idRaza} not exist`);
        }
    } catch (error) {
        res.status(404).send({error: error.message});
    }
}

module.exports = { getDogId };