const request = require('request');

const url = 'https://api.darksky.net/forecast/9b207953cac30c883ec5890496f5287d/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {

    const curTemperature = response.body.currently.temperature;
    const precipProbability = response.body.currently.precipProbability;
    console.log("It is currently " + curTemperature + " degrees out. There is a " + precipProbability + "% chance of rain");
});