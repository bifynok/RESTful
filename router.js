const express = require('express');
const router = express.Router();
const role = require('./controllerRole');
const user = require('./controllerUser');
const report = require('./controllerReports');
const request = require('./controllerRequest');
const review = require('./controllerReview');
const result = require('./controllerResult');

//Routes for "Roles"
router.get('/roles', role.getAllRoles);

router.get('/roles/:id', role.getRoleById);

//Routes for "User"
router.get('/users', user.getAllUsers);

router.get('/users/:id', user.getUserById);

router.post('/users', user.createUser);

router.delete('/users/:id', user.deleteUser);

router.patch('/users/:id', user.updateUser);

//Routes for "MetionReport"
router.get('/mention-reports', report.getAllMentionReports);

router.get('/mention-reports/:id', report.getMentionReportById);

router.post('/mention-reports', report.createMentionReport);

router.delete('/mention-reports/:id', report.deleteMentionReport);

router.patch('/mention-reports/:id', report.updateMentionReport);

//Routes for "PubRequests"
router.get('/pub-requests', request.getAllPubRequests);

router.get('/pub-requests/:id', request.getPubRequestById);

router.post('/pub-requests', request.createPubRequst);

router.delete('/pub-requests/:id', request.deletePubRequest);

//Routes for "PubReview"
router.get('/pub-reviews', review.getAllPubReview);

router.get('/pub-reviews/:id', review.getPubReviewById);

router.post('/pub-reviews', review.createPubReview);

router.delete('/pub-reviews/:id', review.deletePubReview);

router.patch('/pub-reviews/:id', review.updatePubReview);

//Routes for "ResultsData"
router.get('/result-data', result.getAllResultData);

router.get('/result-data/:id', result.getResultDataById);

router.post('/result-data', result.createResultData);

router.delete('/result-data/:id', result.deleteResultData);

module.exports = router;
