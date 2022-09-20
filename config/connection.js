const mongoose = require('mongoose');

// Create a local connection to mongoDB
mongoose.connect(
    'mongodb://127.0.0.1:27017/personalportfolioDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;