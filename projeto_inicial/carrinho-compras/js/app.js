let campoTotal = document.getElementById('valor-total');
let total;
limpar();

function adicionar(){
    let informacoesProduto = document.getElementById('produto').value; 
    let produto = informacoesProduto.split('-')[0];
    let valor = informacoesProduto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    if(100 > quantidade > 0){
        total += valor*quantidade;
        carrinhoDeCompra(quantidade, produto, valor, total);
        document.getElementById('quantidade').value = '';
    }else{
        alert('Adicione uma quantidade de produtos válida!');
        return;
    }
}

function limpar(){
    document.getElementById('lista-produtos').textContent = '';
    total = 0;
    campoTotal.textContent = 'R$'+total;
}

function carrinhoDeCompra(quant, prod,val, tot){
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML+= '<section class="carrinho__produtos__produto"><span class="texto-azul">'+quant+'x</span> '+prod+' <span class="texto-azul">R$'+val+'</span></section>';
    campoTotal.textContent = 'R$'+tot;
}
