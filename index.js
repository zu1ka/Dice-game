let player1 = document.querySelector('.img1');
let player2 = document.querySelector('.img2');


const playerPick = () => {
    return Math.ceil(Math.random() * 6)
}




const pvp = () => {
    let player1Pick = playerPick()
    let player2Pick = playerPick()

    player1.src = `./images/dice${player1Pick}.png`
    player2.src = `./images/dice${player2Pick}.png`
}

document.getElementById("roll").addEventListener('click', pvp)



