const forecast = require("./utils/forecast");
const geoCode = require("./utils/geoCode");


const location = process.argv[2];

if(!location) return console.log("please add location!");

geoCode(location, (error, data) => {
    if(error) {
      return console.log("Error", error);
    } 

    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if(error) {
            return console.log(error);
        } 

        console.log(data.location,forecastdata);
    })

    
});
