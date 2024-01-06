const db = require('./database');

const getAllPubReview = (req, res) => {
    const query = 'SELECT * FROM PubReview';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const getPubReviewById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM PubReview WHERE User_id = ${id}`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const createPubReview = (req, res) => {
    const newPubReview = req.body;
    const query = 'INSERT INTO PubReview SET ?';
    db.query(query, newPubReview, (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, ...newPubReview });
    });
  };
  
  const deletePubReview = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM PubReview WHERE User_id = ${id}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({ id, message: 'PubReview видалено успішно.' });
    });
  };
  
  const updatePubReview = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const query = `UPDATE PubReview SET ? WHERE id = ${id}`;
    db.query(query, updatedData, (err) => {
      if (err) throw err;
      res.json({ id: id, ...updatedData });
    });
  };

  module.exports = {
    getAllPubReview,
    getPubReviewById,
    createPubReview,
    deletePubReview,
    updatePubReview
  };
