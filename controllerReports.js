const db = require('./database');

const getAllMentionReports = (req, res) => {
    const query = 'SELECT * FROM MentionReport';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const getMentionReportById = (req, res) => {
    const mentionReportId = req.params.id;
    const query = `SELECT * FROM MentionReport WHERE id = ${mentionReportId}`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  };
  
  const createMentionReport = (req, res) => {
    const newMenRep = req.body;
    const query = 'INSERT INTO MentionReport SET ?';
    db.query(query, newMenRep, (err, results) => {
      if (err) throw err;
      res.json({ id: results.insertId, ...newMenRep });
    });
  };
  
  const deleteMentionReport = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM MentionReport WHERE id = ${id}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({ id: id, message: 'Звіт видалено успішно.' });
    });
  };
  
  const updateMentionReport = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const query = `UPDATE MentionReport SET ? WHERE id = ${id}`;
    db.query(query, updatedData, (err) => {
      if (err) throw err;
      res.json({ id: id, ...updatedData });
    });
  };

  module.exports = {
    getAllMentionReports,
    getMentionReportById,
    createMentionReport,
    deleteMentionReport,
    updateMentionReport
  };
