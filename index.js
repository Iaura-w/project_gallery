
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users.js');
const picturesRoutes = require('./routes/pictures.js');
const mongoose = require('./db/mongoose');
const Picture = require('./models/picture');

// Moduły potrzebne do generowania widoków
const hbs = require('express-handlebars');
const path = require('path');

// Ustawienia bodyParser do obsługi zapytań JSON
app.use(bodyParser.json());

// Ustawienie ścieżek dla routerów
app.use('/users', usersRoutes);
app.use('/pictures', picturesRoutes);

// Ustawienie silnika szablonów dla handlebars
app.engine('hbs', hbs.engine({
    extname: 'hbs', 
    defaultLayout: 'layout', 
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');

// Uruchomienie serwera
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
