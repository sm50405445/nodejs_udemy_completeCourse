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

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})