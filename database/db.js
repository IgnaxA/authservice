const db_config = require('../configs/db-config.json');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: db_config.user,
    password: db_config.password,
    host: db_config.host,
    port: db_config.port,
    database: db_config.database_name,
});

module.exports = pool;