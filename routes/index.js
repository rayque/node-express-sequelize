var express = require('express');
var router = express.Router();

const companyController = require('../controllers').company;
const branchController = require('../controllers').branch;
const profileController = require('../controllers').profile;
const userController = require('../controllers').user;
const roleController = require('../controllers').role;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Company Router */
router.get('/api/company', function(req, res) {
  companyController.list(req, res)
});
router.get('/api/company/:id', function(req, res) {
  companyController.getById(req, res)
});
router.post('/api/company', function(req, res) {
  companyController.add(req, res)
});
router.put('/api/company/:id', function(req, res) {
  companyController.update(req, res)
});
router.delete('/api/company/:id', function(req, res) {
  companyController.delete(req, res)
});

/* Branch Router */
router.get('/api/branch', function(req, res) {
  branchController.list(req, res)
});
router.get('/api/branch/:id', function(req, res) {
  branchController.getById(req, res)
});
router.post('/api/branch', function(req, res) {
  branchController.add(req, res)
});
router.put('/api/branch/:id', function(req, res) {
  branchController.update(req, res)
});
router.delete('/api/branch/:id', function(req, res) {
  branchController.delete(req, res)
});

/* Profile Router */
router.get('/api/profile', function(req, res) {
  profileController.list(req, res)
});
router.get('/api/profile/:id', function(req, res) {
  profileController.getById(req, res)
});
router.post('/api/profile', function(req, res) {
  profileController.add(req, res)
});
router.put('/api/profile/:id', function(req, res) {
  profileController.update(req, res)
});
router.delete('/api/profile/:id', function(req, res) {
  profileController.delete(req, res)
});

/* User Router */
router.get('/api/user', function(req, res) {
  userController.list(req, res)
});
router.get('/api/user/:id', function(req, res) {
  userController.getById(req, res)
});
router.post('/api/user', function(req, res) {
  userController.add(req, res)
});
router.put('/api/user/:id', function(req, res) {
  userController.update(req, res)
});
router.delete('/api/user/:id', function(req, res) {
  userController.delete(req, res)
});

/* User Role */
router.get('/api/role', function(req, res) {
  roleController.list(req, res)
});
router.get('/api/role/:id', function(req, res) {
  roleController.getById(req, res)
});
router.post('/api/role', function(req, res) {
  roleController.add(req, res)
});
router.put('/api/role/:id', function(req, res) {
  roleController.update(req, res)
});
router.delete('/api/role/:id', function(req, res) {
  roleController.delete(req, res)
});

/* Advance Router */
router.post('/api/role/add_user', function(req, res) {
  roleController.addUser(req, res)
});
router.post('/api/company/add_with_branches', function(req, res) {
  companyController.addWithBranchs(req, res)
});

module.exports = router;
