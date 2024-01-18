let players = [];
let currentPlayerIndex = 0;
let countdownValue = 60;
let countdownInterval;
let playerCountdowns = [];

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function configurePlayers() {
    const playerCount = parseInt(document.getElementById('playerCount').value);
    playerCountdowns = Array(playerCount).fill(countdownValue);

    document.getElementById('playerNamesContainer').innerHTML = '';

    for (let i = 1; i <= playerCount; i++) {
        const playerNameInput = document.createElement('input');
        playerNameInput.type = 'text';
        playerNameInput.placeholder = `Nombre del Jugador ${i}`;
        document.getElementById('playerNamesContainer').appendChild(playerNameInput);
    }
}

function acceptNames() {
    const inputs = document.getElementById('playerNamesContainer').querySelectorAll('input');
    players = Array.from(inputs).map(input => input.value);

    closeModal();
    resetGame();
}

function resetGame() {
    updatePlayerInfo();
    startCountdown();
}

function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updatePlayerInfo();
}

function startCountdown() {
    updatePlayerInfo();

    countdownInterval = setInterval(function() {
        playerCountdowns[currentPlayerIndex]--;

        if (playerCountdowns[currentPlayerIndex] >= 0) {
            document.getElementById('countdown').textContent = playerCountdowns[currentPlayerIndex];
        } else {
            clearInterval(countdownInterval);
            nextPlayer();
            resetCountdown();
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);

    // Reiniciar todos los cronómetros de los jugadores
    for (let i = 0; i < playerCountdowns.length; i++) {
        playerCountdowns[i] = countdownValue;
    }

    startCountdown();
}

function updatePlayerInfo() {
    document.getElementById('currentPlayer').textContent = players[currentPlayerIndex];
    document.getElementById('countdown').textContent = playerCountdowns[currentPlayerIndex];
}

document.getElementById("rollear").addEventListener("click", function(){
    console.log("relojes reiniciados")
    resetCountdown()
})