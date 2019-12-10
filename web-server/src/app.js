const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

//Define paths for Express config
const publicFileDir = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlers engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory
app.use(express.static(publicFileDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'LSM'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        img: '/img/_img34.png',
        name: 'LSM'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is helpful text',
        title: 'Help page',
        name: 'LSM'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:'You must provide an address'
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            return res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })
    })

    // res.send({
    //     forcast:'It is snowing',
    //     location:'Philadelphia',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        product:[]
    })
})

app.get('/help/*', (req, res) => {
    res.send('Help article not found');
})

app.get('/what/*', (req, res) => {
    res.send('What article not found');
})

app.get("*", (req, res) => {
    res.render('404', {
        title: '404',
        name: 'LSM',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})