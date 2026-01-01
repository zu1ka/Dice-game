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

    if (player1Pick > player2Pick) {
        document.querySelector("h1").innerText = `Player 1 wins`
    } else if (player2Pick > player1Pick) {
        document.querySelector("h1").innerText = `Player 2 wins`
    } else {
        document.querySelector("h1").innerText = `Its a Draw`
    }


}




document.getElementById("roll").addEventListener('click', pvp)



