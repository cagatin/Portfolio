const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// importing connection and routes files
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Create Handlebars.js engine object
const hbs = exphbs.create({});

// Register the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));        //serve static files from public directory

// Routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});
