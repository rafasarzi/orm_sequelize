const { Router } = require('express')
const UserController = require('../controllers/UserCotroller')

const router = Router()
router
  .get('/users', UserController.pegaTodosUsuarios) 
  .post('/users', UserController.criaUsuario)
  .put('/users/:id', UserController.atualizaUsuario)  
  .get('/users/:id', UserController.pegaUsuario)  
  .delete('/users/:id', UserController.apagaUsuario)   
  .post('/users/:id/restaura', UserController.restauraUsuario)  

module.exports = router