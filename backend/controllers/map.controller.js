const { validationResult } = require("express-validator")
const mapService = require("../services/maps.service")

module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {address} = req.query
    
    try {
        const coordinates = await mapService.getAddressCoordinate(address)
        if(!coordinates){
            return res.status(404).json({message: "Coordinates not found"})
        }
        res.status(200).json({coordinates})
        console.log(coordinates)
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        console.log(req.body);        // For POST request data (needs body-parser)
        console.log(req.params);      // For route parameters
        console.log(req.query);       // For query string values
        console.log(req.headers);     // For request headers
        console.log(req.method);      // For HTTP method (GET, POST, etc.)
        console.log(req.url); 

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {origin, destination} = req.query;

        const distanceTime = await mapService.getDistanceTime(origin, destination)

        res.status(200).json(distanceTime)

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'})
    }
}

