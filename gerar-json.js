

function gerarJsonPedido(numero, dataPedido, carrinho) {
  var itens = [];
  for (var i = 0; i < carrinho.length; i++) {
    var produto = acharProduto(carrinho[i].id);
    itens.push({
      nomeProduto: produto.nome,
      preco: produto.preco,
      quant: carrinho[i].quantidade
    });
  }

  return JSON.stringify({
    id: numero,
    data_pedido: dataPedido,
    status: 'Pendente',
    itens: itens
  }, null, 2);
}
