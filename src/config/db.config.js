const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    local: {
        localDatabaseUrl: process.env.DB_URI,
        secret: "password"
    }
};