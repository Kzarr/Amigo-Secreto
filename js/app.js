let amigos = [];

function adicionar (){
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == ''){
        alert('É preciso escrever ao menos 1 caractere')
    } else {
    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value);

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }
    amigo.value= "";
}
}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    let diferença = 4 - amigos.length;
    let elementosDaLista = amigos.length > 2 ? 'amigo' : 'amigos';
    if (amigos.length < 4) {
        alert(`É preciso ao menos 4 amigos para poder fazer um sorteio. Adicione mais ${diferença} ${elementosDaLista}`);
    } else{

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}
}
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        let indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}
