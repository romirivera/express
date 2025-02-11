const router = require('express').Router();
const {
  createNewUser,
  listUsers,
  deleteUser,
} = require('../controllers/user.controllers');

//crear ua ruta con un nuevo usuario

router.get('/users', listUsers);

router.delete('/users', deleteUser);

router.post('/users', createNewUser);

module.exports = router;
