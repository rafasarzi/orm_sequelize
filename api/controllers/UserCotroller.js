const { UsersServices } = require('../services')
const usersServices = new UsersServices()

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
    const novoUsuario = req.body
    try {
      const novoUsuarioCriado = await usersServices.criaRegistro(novoUsuario)
      return res.status(200).json(novoUsuarioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async atualizaUsuario(req, res) {  
    const { id } = req.params
    const novasInfos = req.body
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
      await usersServices.apagaRegistro(Number(id))
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async restauraUsuario(req, res) {  
    const { id } = req.params
    try {
      const registroRestaurado = await usersServices
        .restauraRegistro(Number(id))
      return res.status(200).json(registroRestaurado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
 
}

module.exports = UserController