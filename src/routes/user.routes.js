const router = require('express').Router();
const { createNewUser } = require('../controllers/user.controllers');

//crear ua ruta con un nuevo usuario
router.post('/register', createNewUser);

module.exports = router;
