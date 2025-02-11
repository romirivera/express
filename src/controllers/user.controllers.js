let usuarios = [];

//crear un nuevo usuario
const createNewUser = (req, res) => {
  console.log(req.body);
  const user = req.body.user;

  usuarios.push(user);
  res.send('crear nuevo usuario');
};

const listUsers = (req, res) => {
  res.json({ usuarios });
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
  const nuevosUsuarios = usuarios.filter((user) => user !== req.body.user);

  usuarios = nuevosUsuarios;

  res.send('usuario eliminado');
};

module.exports = { createNewUser, loginUser, updateUser, deleteUser, listUsers };

// CRUD relojes -- watch, plural: watches

// Descripción de convenciones de API REST (o RESTful)

// CREATE POST /watches
// Datos se envían en el Body (como JSON): {"marca": "Casio", "precio": 12000000}

// READ GET /watches
// Retorna todos los relojes que tenemos almacenados.
// Se le pueden agregar query params. Ej: /watches?marca="Casio"

// READ GET /watches/:id
// Retorna un único reloj con todos sus detalles
// Ejemplo respuesta: {"marca": "Casio", "precio": 2}

// UPDATE PATCH /watches/:id
// Actualiza un único reloj. Datos se envian en el body como JSON igual que en el CREATE.
// La convención es que solo se actualizan los atributos que se envían
// EJEMPLO: PATCH /watches/10 {"precio": 120000}

// DELETE. DELETE /watches/:id
// La conveción es pasar un req.param :id, pero también se puede pasar un req.body y ahí tener el id
// EJ: DELETE /watches/10
