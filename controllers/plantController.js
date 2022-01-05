const models = require('../models')
const plantController = {}

plantController.index = async (req,res) => {
    try {
        const plants = await models.plant.findAll()
        res.json({ plants })
        
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
}

plantController.viewOnePlant = async (req,res) => {
    try {
        const plant = await models.plant.findOne({
            where: {id: req.params.plantId}
            })
        res.json({ plant })
    } catch (err) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = plantController