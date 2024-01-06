const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '987654321',
    database: 'mcanalyzer',
    insecureAuth: true
});

db.connect((err) => {
  if (err) {
    console.error("Can't connect to database: " + err.stack);
    return;
  }
  console.log('Database connected with id ' + db.threadId);
});

module.exports = db;