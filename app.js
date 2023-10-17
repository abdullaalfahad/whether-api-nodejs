const geoCode = require("./utils/geoCode");

geoCode("boston", (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
});
