let players = [];
let currentPlayerIndex = 0;
let countdownValue = ""
let countdownInterval;

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
    players = Array.from(inputs).map(input => input.value);
    console.log(players)
    // Cerrar el modal
    closeModal();

    // Iniciar el juego
    resetGame();
    countdownValue = document.getElementById("segundosAJugar").value;
    console.log(countdownValue)
}

function resetGame() {
    // Reiniciar el juego
    updatePlayerInfo();
    startCountdown();
}

function nextPlayer() {
    // Pasar al siguiente jugador
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updatePlayerInfo();

}

function startCountdown() {
    const playerCountdowns = [];
    const rangeValue = parseInt(document.getElementById('playerCount').value);

    // Inicializar todos los relojes de jugadores
    for (let i = 0; i < rangeValue; i++) {
        playerCountdowns[i] = countdownValue;
    }

    // Mostrar el primer jugador
    updatePlayerInfo();

    // Iniciar el cronómetro
    countdownInterval = setInterval(function() {
        playerCountdowns[currentPlayerIndex]--;

        if (playerCountdowns[currentPlayerIndex] >= 0) {
            document.getElementById('countdown').textContent = playerCountdowns[currentPlayerIndex];
        } else {
            clearInterval(countdownInterval);
            nextPlayer();
        }
    }, 1000);
}

function updatePlayerInfo() {
    document.getElementById('currentPlayer').textContent = players[currentPlayerIndex];
    document.getElementById('countdown').textContent = playerCountdowns[currentPlayerIndex];
}

function resetCountdown() {
    // Reiniciar el cronómetro
    clearInterval(countdownInterval);
    countdownValue = document.getElementById("segundosAJugar").value;
    startCountdown();
}

function updatePlayerInfo() {
    // Actualizar la información del jugador actual
    document.getElementById('currentPlayer').textContent = players[currentPlayerIndex];
}

