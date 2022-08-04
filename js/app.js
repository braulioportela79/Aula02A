let userScore = 0;
let computerScore = 0;

let getUserChoice = () => {
    let userChoice = parseInt(prompt('Pedra - 1, Papel - 2, Tesoura - 3'));
    return userChoice;
};

let getComputerChoice = () => {
    let randomChoice = parseInt(Math.random() * 3 + 1);
    return randomChoice;
};

let getWinner = () => {
    if (userScore == 2) {
        alert('Você foi o vencedor!');
    } else if (computerScore == 2) {
        alert('Computador foi o vencedor!');
    } else {
        startGame();
    };
};

let startGame = () => {

    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();

    if (userChoice == 1) {
        console.log('Você escolheu: Pedra');
    } else if (userChoice == 2) {
        console.log('Você escolheu: Papel');
    } else if (userChoice == 3) {
        console.log('Você escolheu: Tesoura');
    } else {
        alert('Escolha Inválida. Por favor, escolha um número de 1 a 3.');
        console.log('Você escolheu: -');
    };

    if (computerChoice == 1) {
        console.log('Computador escolheu: Pedra');
    } else if (computerChoice == 2) {
        console.log('Computador escolheu: Papel');
    } else if (computerChoice == 3) {
        console.log('Computador escolheu: Tesoura');
    };

    switch (userChoice) {
        case computerChoice: // Se Computador e Usuário Escolherem Mesmo Valor (Empate)
            alert('Empate! Sem pontuação.');
            break;

        case 1: // Se Usuário Escolher 1 (Pedra)
            if (computerChoice == 2) { // Se Computador Escolher 2 (Papel)
                computerScore++ // Computador Ganhou (Adicionar 1 ponto)
                alert('Computador ganhou: Papel(PC) x Pedra(Você)');
            } else { // Se Computador Escolher 3 (Tesoura)
                userScore++ // Usuário Ganhou (Adicionar 1 ponto)
                alert('Você ganhou: Pedra(Você) x Tesoura(PC)');
            };
            break;

        case 2: // Se Usuário Escolher 2 (Papel)
            if (computerChoice == 1) { // Se Computador Escolher 1 (Pedra)
                userScore++ // Usuário Ganhou (Adicionar 1 ponto)
                alert('Você ganhou: Papel(Você) x Pedra(PC)');
            } else { // Se Computador Escolher 3 (Tesoura)
                computerScore++ // Computador Ganhou (Adicionar 1 ponto)
                alert('Computador ganhou: Tesoura(PC) x Papel(Você)');
            };
            break;

        case 3: // Se Usuário Escolher 3 (Tesoura)
            if (computerChoice == 1) { // Se Computador Escolher 1 (Pedra)
                computerScore++ // Computador Ganhou (Adicionar 1 ponto)
                alert('Computador ganhou: Pedra(PC) x Tesoura(Você)');
            } else { // Se Computador Escolher 2 (Papel)
                userScore++ // Usuário Ganhou (Adicionar 1 ponto)
                alert('Você ganhou: Tesoura(Você) x Papel(PC)');
            };
    };

    console.log('Pontuação Usuário: ' + userScore);
    console.log('Pontuação Computador: ' + computerScore);
    getWinner();
};

startGame();