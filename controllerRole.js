const db = require('./database');

const getAllRoles = (req, res) => {
    const query = 'SELECT * FROM Role';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const getRoleById = (req, res) => {
    const roleId = req.params.id;
    const query = `SELECT * FROM Role WHERE id = ${roleId}`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };

  module.exports = {
    getAllRoles,
    getRoleById
  };
