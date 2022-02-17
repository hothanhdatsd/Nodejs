const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const hbs = handlebars.create({ extname: '.hbs' });
const route = require('./routes');
const db = require('./config/db');


const app = express();
const port = 3000;

// connect DB;
db.connect();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'));
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine);




app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources', 'views'));


route(app);



app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
})