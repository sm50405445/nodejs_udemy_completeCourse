const request = require('request');

const darkSkyurl = 'https://api.darksky.net/forecast/9b207953cac30c883ec5890496f5287d/37.8267,-122.4233';

// request({ url: url, json: true }, (error, response) => {

//     const curTemperature = response.body.currently.temperature;
//     const precipProbability = response.body.currently.precipProbability;
//     console.log("It is currently " + curTemperature + " degrees out. There is a " + precipProbability + "% chance of rain");
// });


// request({url:mapboxUrl,json:true},(error,response)=>{
//     const jsonData = response.body;

//     const latitude = jsonData.features[0].geometry.coordinates[1];
//     const longitude = jsonData.features[0].geometry.coordinates[0];

//     console.log('longitude = '+longitude);
//     console.log('latitude = '+latitude);

// })

// request({url:darkSkyurl,json:true},(error,response)=>{
//     if(error){
//         console.log('error')
//     }else if(error.errno === "ENOTFOUND"){
//         console.log('network err')
//     }else if(response.body.features.length ===0){
//         console.log('Unable to connect to location services!')
//     }
//     else{
//         const jsonData = response.body;

//         const latitude = jsonData.features[0].geometry.coordinates[1];
//         const longitude = jsonData.features[0].geometry.coordinates[0];

//         console.log('longitude = '+longitude);
//         console.log('latitude = '+latitude);
//     }      
// })

const geocode = (address, callback) => {
    const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2Q1MDcxMjMyMSIsImEiOiJjazI3Z3RzenAwNnB5M2xtYm8wc2s4bXA1In0.ZezIvmBEcMLZHMUQIx74gg';

    request({ url: mapboxUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Philadelphia', (error, data) => {
    console.log("Error", error);
    console.log("data", data);
})

