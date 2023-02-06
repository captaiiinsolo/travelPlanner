const router = require('express').Router();
const {Location, Traveller, Trip} = require('../../models');

// GET All Travellers
router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll({
            include: [{model: Trip}],
        });

        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router