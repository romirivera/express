const app = require('./src/app/app'); //importamos app
const port = 4000;

app.get('/', (req, res) => {
  res.send('hello world!');
});
// Iniciamos el servidor
app.listen(port, () => {
  console.log(`
 Servidor corriendo en http://localhost:${port}`);
});
