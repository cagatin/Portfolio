const express = require('express');
const exphbs = require('express-handlebars');

// importing connection and routes files
import db from './config/connection';
import routes from './routes';

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

// Start the server and open the connection
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
