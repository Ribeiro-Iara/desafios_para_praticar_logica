let i = 0;
let l = 0;
let j = 0;
let limite = 0;
let amigos = [];
let sorteio = [];


function adicionar(){
    amigos.push(document.getElementById('nome-amigo').value);
    document.getElementById('nome-amigo').value = '';
    let listaAmigos = document.getElementById('lista-amigos');
    limite = amigos.length;
    for(i; i<limite;i++){
        listaAmigos.textContent += amigos[i]+", ";
    }
}

function sortear(){
    while(sorteio.length!=limite){
        let numeroAleatorio = parseInt(Math.random() * limite);
        if(sorteio.includes(numeroAleatorio) || numeroAleatorio == l){
            return sortear();
        }else {
            sorteio.push(numeroAleatorio);
            l++;
        }
    }
    let listaSorteio = document.getElementById('lista-sorteio');
    for(j; j<limite;j++){
        listaSorteio.innerHTML += amigos[j]+' -> ' +amigos[sorteio[j]]+'<br>';
    }
}

function reiniciar(){
    i = 0;
    l = 0;
    j = 0;
    limite = 0;
    amigos = [];
    sorteio = [];
    document.getElementById('lista-amigos').textContent = "";
    document.getElementById('lista-sorteio').textContent = "";
    console.log(i, l, j, limite, amigos, sorteio)
}