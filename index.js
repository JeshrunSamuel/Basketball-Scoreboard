let scoreHome = 0
let scoreGuest = 0
//for home score count
function add1Point() {
    scoreHome += 1
    document.getElementById("score-home").textContent = scoreHome
}

function add2Point() {
    scoreHome += 2
    document.getElementById("score-home").textContent = scoreHome
}

function add3Point() {
    scoreHome += 3
    document.getElementById("score-home").textContent = scoreHome
}

//for guest score count
function add1Pointg() {
    scoreGuest += 1
    console.log(scoreGuest)
    document.getElementById("score-guest").textContent = scoreGuest
}

function add2Pointg() {
    scoreGuest += 2
    document.getElementById("score-guest").textContent = scoreGuest
}

function add3Pointg() {
    scoreGuest += 3
    document.getElementById("score-guest").textContent = scoreGuest
}

//function for the reset button

function resetScore() {
    scoreHome = 0
    scoreGuest = 0

    document.getElementById("score-guest").textContent = scoreGuest
    document.getElementById("score-home").textContent = scoreHome
}
