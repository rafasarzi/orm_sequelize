const { UsersServices } = require('../services')
const usersServices = new UsersServices()
const bcrypt = require('bcrypt')


class UserController {
  

  static async pegaTodosUsuarios(req, res){  
    try {
      const todosUsuarios = await usersServices.pegaTodosOsRegistros()
      return res.status(200).json(todosUsuarios)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
   static async pegaUsuario(req, res) {  
    const { id } = req.params
    try {
      const usuario = await usersServices.pegaUmRegistro({ id })
      return res.status(200).json(usuario)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async criaUsuario(req, res) {  
    const hashPass =  await bcrypt.hash(req.body.password, 10)
    const novoUsuario = { username: req.body.username, password:hashPass, email:req.body.email }
    try {
      console.log('aqui', novoUsuario)
      const novoUsuarioCriado = await usersServices.criaRegistro(novoUsuario)
      return res.status(200).json(novoUsuarioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async atualizaUsuario(req, res) {  
    const { id } = req.params
    const hashPass =  await bcrypt.hash(req.body.password, 10)
    const novasInfos = { username: req.body.username, password:hashPass , email:req.body.email }
    try {
      await usersServices.atualizaRegistro(novasInfos, Number(id))
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async apagaUsuario(req, res) {  
    const { id } = req.params
    try {
      await usersServices.apagaRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraUsuario(req, res) {  
    const { id } = req.params
    try {
      await usersServices.restauraRegistro(id)
      return res.status(200).json({ mensagem: `id ${id} restaurado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
 
}

module.exports = UserController