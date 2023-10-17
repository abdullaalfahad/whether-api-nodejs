const request = require("request");

const geoCode = (address, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2hhaHJlYXoiLCJhIjoiY2xtOWN1OGNkMGlmdjNjbzVvd2h6Ym83YSJ9.JdWOwEKi595qRu8PVU6IaQ&limit=1";

    request({url, json: true}, (error, response) => {
        if(error) {
            callback("unable to connect internet", undefined);
        } else if(response.body.features.length === 0) {
            callback("Location not found. try another one!", undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;

