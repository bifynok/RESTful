const db = require('./database');

const getAllResultData = (req, res) => {
    const query = 'SELECT * FROM ResultData';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const getResultDataById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM ResultData WHERE id = ${id}`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const createResultData = (req, res) => {
    const newResultData = req.body;
    const query = 'INSERT INTO ResultData SET ?';
    db.query(query, newResultData, (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, ...newResultData });
    });
  };
  
  const deleteResultData = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM ResultData WHERE id = ${id}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({ id, message: 'ResultData видалено успішно.' });
    });
  };

  module.exports = {
    getAllResultData,
    getResultDataById,
    createResultData,
    deleteResultData
  };
