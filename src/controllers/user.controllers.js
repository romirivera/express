//crear un nuevo usuario
const createNewUser = (req, res) => {
  res.send('crear nuevo usuario');
};

//hacer login
const loginUser = (req, res) => {
  res.send('login usuario');
};
//acttualizar al usuario
const updateUser = (req, res) => {
  res.send('actualizar usuario');
};
//eliminar al usuario
const deleteUser = (req, res) => {
  res.send('eliminar usuario');
};
module.exports = { createNewUser };
