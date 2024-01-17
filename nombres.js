let playerNames = [];

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function configurePlayers() {
    const playerCount = parseInt(document.getElementById('playerCount').value);

    // Limpiar el contenedor de nombres de jugadores
    document.getElementById('playerNamesContainer').innerHTML = '';

    // Crear campos de entrada para los nombres de los jugadores
    for (let i = 1; i <= playerCount; i++) {
        const playerNameInput = document.createElement('input');
        playerNameInput.type = 'text';
        playerNameInput.placeholder = `Nombre del Jugador ${i}`;
        document.getElementById('playerNamesContainer').appendChild(playerNameInput);
    }
}

function acceptNames() {
    // Guardar los nombres ingresados
    const inputs = document.getElementById('playerNamesContainer').querySelectorAll('input');
    playerNames = Array.from(inputs).map(input => input.value);

    // Cerrar el modal
    closeModal();

    // Puedes hacer algo con los nombres, como iniciar el juego
    console.log("Nombres de jugadores:", playerNames);
}

function updateRangeValue() {
    const range = document.getElementById('playerCount');
    const rangeValue = document.getElementById('rangeValue');
    rangeValue.textContent = range.value;
}

// Llamada inicial para establecer el valor inicial del range
updateRangeValue();

function updateRangeValue2() {
    const range = document.getElementById('segundosAJugar');
    const rangeValue = document.getElementById('rangeValue2');
    rangeValue.textContent = range.value;
}

// Llamada inicial para establecer el valor inicial del range
updateRangeValue();