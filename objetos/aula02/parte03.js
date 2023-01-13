// Podemos guardar funções como propriedade de um objeto
// palavra reservada THIS
const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
  saldo: 200,
  efetuaPagamento: function (valor){
    if(valor > this.saldo)
      console.log("Saldo insuficiente");
    else {
      this.saldo -= valor;
      console.log(`Compra efetuada. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(300);
cliente.efetuaPagamento(100);