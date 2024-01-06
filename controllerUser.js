const db = require('./database');

const getAllUsers = (req, res) => {
    const query = 'SELECT * FROM User';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const getUserById = (req, res) => {
    const userId = req.params.id;
    const query = `SELECT * FROM User WHERE id = ${userId}`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const createUser = (req, res) => {
    const newUser = req.body;
    const query = 'INSERT INTO User SET ?';
    db.query(query, newUser, (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, ...newUser });
    });
  };
  
  const deleteUser = (req, res) => {
    const userId = req.params.id;
    const query = `DELETE FROM User WHERE id = ${userId}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({ id: userId, message: 'Користувач видалений успішно.' });
    });
  };
  
  const updateUser = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const query = `UPDATE User SET ? WHERE id = ${id}`;
    db.query(query, updatedData, (err) => {
      if (err) throw err;
      res.json({ id: id, ...updatedData });
    });
  };

  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
  };
  