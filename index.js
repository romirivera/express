const app = require('./src/app/app'); //importamos app
const port = 8080;

// Iniciamos el servidor
app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:8080');
});
