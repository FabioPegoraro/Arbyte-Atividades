//Usando a classe do exercício anterior, crie métodos que representem possíveis ações do usuário no aplicativo.
//ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco), adicionarFormaDePagamento(pagamento)

let rs = require('readline-sync')

class Pessoa{
    constructor(nome, email, enderecoPrimario, formaPagamento){
        this.nome = nome
        this.email = email
        this.enderecoPrimario = enderecoPrimario
        this.formaPagamento = formaPagamento
    }
    setSolicitarNovaViagem(local){
        console.log(`Seu local de partida é ${this.enderecoPrimario} e seu local de chegada é ${local}`)
    }
    setEditarEnderecoPrimario(enderecoNovo){
        this.enderecoPrimario = enderecoNovo
    }
    setAdicionarFormaDePagamento(novaFormaPagamento){
        this.formaPagamento = novaFormaPagamento
    }
    impromeUsuario(){
        console.log(this.name, this.email, this.enderecoPrimario, this.formaPagamento)
    }
}

const usuarioUber = new Pessoa('Fabio', 'fabio@email.com', 'Rua Direita, 1', 'Cartão de Crédito' )
console.log('Antes das modificações: \n ',usuarioUber)

let local = 'Av. Paulista, 02'
usuarioUber.setSolicitarNovaViagem(local)
let enderecoNovo = 'Rua Paralelepipedo, 01'
usuarioUber.setEditarEnderecoPrimario(enderecoNovo)
let novaFormaPagamento = 'Dinheiro'
usuarioUber.setAdicionarFormaDePagamento(novaFormaPagamento)
console.log('Depois das modificações: \n', usuarioUber)


//

