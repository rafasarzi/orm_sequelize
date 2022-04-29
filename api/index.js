const express = require('express')
const routes = require('./routes')
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:3000"
  };
const app = express()
const port = 3000

routes(app)
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))

module.exports = app