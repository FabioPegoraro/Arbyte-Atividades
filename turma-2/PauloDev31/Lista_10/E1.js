let rs = require('readline-sync')

class Usuario {
    constructor(){
        this.nome = rs.question('Digite seu nome de usuario: \n')
    }
}
let usuario = new Usuario
console.log(usuario)