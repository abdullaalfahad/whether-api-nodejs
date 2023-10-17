const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherunlocked.com/api/forecast/" + latitude + "," + longitude + "?app_id=c1421399&app_key=3e75cdf515fab8b434e33835e336e615";

    request({url, json: true}, (error, response) => {
        if(error) {
            callback("error", undefined);
        } else{
            callback(undefined, {
                maxTemp: response.body.Days[0].temp_max_c,
                minTemp: response.body.Days[0].temp_min_c
            })
        }
    })
}

module.exports = forecast;