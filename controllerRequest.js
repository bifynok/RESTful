const db = require('./database');

const getAllPubRequests = (req, res) => {
    const query = 'SELECT * FROM PubRequest';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const getPubRequestById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM PubRequest WHERE User_id = ${id}`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const createPubRequst = (req, res) => {
    const newPubRequest = req.body;
    const query = 'INSERT INTO PubRequest SET ?';
    db.query(query, newPubRequest, (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, ...newPubRequest });
    });
  };
  
  const deletePubRequest = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM PubRequest WHERE User_id = ${id}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({ id, message: 'PubRequest видалено успішно.' });
    });
  };

  module.exports = {
    getAllPubRequests,
    getPubRequestById,
    createPubRequst,
    deletePubRequest
  };
