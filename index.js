
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users.js');
const picturesRoutes = require('./routes/pictures.js');
const mongoose = require('./db/mongoose');
const Picture = require('./models/picture');

const hbs = require('express-handlebars');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/users', usersRoutes);
app.use('/pictures', picturesRoutes);

app.engine('hbs', hbs.engine({
    extname: 'hbs', 
    defaultLayout: 'layout', 
    layoutsDir: __dirname + '/views/layouts/',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'hbs');

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
