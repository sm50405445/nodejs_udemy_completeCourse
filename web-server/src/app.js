const path = require('path');
const express = require('express');
const hbs = require('hbs');

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
    res.send('Weather Page', {
        title: 'weather',
        name: 'LSM'
    })
})

app.get('/products', (req, res) => {
    res.send({
        products: []
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