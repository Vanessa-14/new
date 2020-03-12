const express = require('express');
const router = express.Router();
const userController = require('../controllers/Users.controller');
const alertController = require('../controllers/Alerts.controller');

    // Login routing
    router.get('/', userController.getUsers);
    router.post('/', userController.createUser);
    router.get('/:id', userController.getUser);
    router.put('/:id', userController.editUser);
    router.delete('/:id', userController.deleteUser);



module.exports = router;