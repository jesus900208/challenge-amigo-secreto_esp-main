// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const agregaAmigo = document.getElementById('amigo');
    const nombre = agregaAmigo.value.trim();

    // Validar la entrada
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (nombre === '' || !nameRegex.test(nombre)) {
		agregaAmigo.value = '';
        alert('Por favor, inserte un nombre válido (solo letras y espacios).');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    agregaAmigo.value = '';
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}