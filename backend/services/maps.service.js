const axios = require('axios');

// accept an address and return the coordinares using Google maps API and axios
module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    // console.log(response.data)
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error('Unable to fetch coordinates');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
    console.log("Origin:", origin);
    console.log("Destination:", destination);
    
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }
    
    const apiKey = process.env.GOOGLE_MAPS_API;
    
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&units=metric&mode=driving&key=${apiKey}`;
    
    console.log("Final URL:", url);
  try {
    const response = await axios.get(url);
    console.log("Google Distance Matrix API response:", response.data);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
        throw new Error('No routes found');
      }

      const element = response.data.rows[0].elements[0];

        return {
        distance: element.distance?.text || "Unknown",
        duration: element.duration?.text || "Unknown"
        };
    } else {
        if (response.data.status !== "OK") {
            throw new Error('Unable to fetch distance and time');
        }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
