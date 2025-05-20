const captainModel = require("../models/captain.model")


module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }
    
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color, 
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}



//POST http://localhost:4000/captains/register

// {
//     "fullname": {
//         "firstname": "ruchi",
//         "lastname": "captain"
//     },
//     "email": "captain@ruchi.com",
//     "password": "captain_ruchi",
//     "vehicle": {
//         "color": "red", 
//         "plate": "MP05RB7828",
//         "capacity": 2,
//         "vehicleType": "car"
//     }
// }


//{
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODEwOTFkNGZjYTgzOTMzMThiY2NlMjAiLCJpYXQiOjE3NDU5MTYzNzIsImV4cCI6MTc0NjAwMjc3Mn0.jkYJyMv7qnZhuu_uW2uAgfTwDYaBpN5P0YbeNQkUPpY",
//     "captain": {
//         "fullname": {
//             "firstname": "ruchi",
//             "lastname": "captain"
//         },
//         "email": "captain@ruchi.com",
//         "password": "$2b$10$N.KS8LEHsS/lieAbXb6Rju4kbcO4YMCFO6QQohSRD1BXCDqn54In.",
//         "status": "inactive",
//         "vehicle": {
//             "color": "red",
//             "plate": "MP05RB7828",
//             "capacity": 2,
//             "vehicleType": "car"
//         },
//         "_id": "681091d4fca8393318bcce20",
//         "__v": 0
//     }
// }