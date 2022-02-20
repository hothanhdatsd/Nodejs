const express = require('express');
const route = express.Router();

const userController = require('../app/controllers/UserController')



route.get('/', userController.index);
route.get('/signup', userController.signup);
route.post('/store', userController.store);
route.get('/signin', userController.signin);
route.post('/validate', userController.validate);



module.exports = route;