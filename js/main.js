// VARIABLES
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let homeTeam = document.getElementById('home-team')
let guestTeam = document.getElementById('guest-team')
let countHome = 0
let countGuest = 0

// Increment Team Home
function addOneHome() {
    countHome++
    scoreHome.textContent = countHome
    highlight()
}

function addTwoHome() {
    countHome += 2
    scoreHome.textContent = countHome
    highlight()
}

function addThreeHome() {
    countHome += 3
    scoreHome.textContent = countHome
    highlight()
}

// Increment Team Guest
function addOneGuest() {
    countGuest++
    scoreGuest.textContent = countGuest
    highlight()
}

function addTwoGuest() {
    countGuest += 2
    scoreGuest.textContent = countGuest
    highlight()
}

function addThreeGuest() {
    countGuest += 3
    scoreGuest.textContent = countGuest
    highlight()

}

// Highlight the winner
function highlight() {
    if (countGuest < countHome) {
        homeTeam.style.background = 'yellow'
        homeTeam.style.color = 'black'
        guestTeam.style.background = 'none'
        guestTeam.style.color = 'white'
    } else if (countGuest > countHome) {
        homeTeam.style.background = 'none'
        homeTeam.style.color = 'white'
        guestTeam.style.background = 'yellow'
        guestTeam.style.color = 'black'
    } else {
        homeTeam.style.background = 'none'
        homeTeam.style.color = 'white'
        guestTeam.style.background = 'none'
        guestTeam.style.color = 'white'
    }
}

// Reset score
function reset() {
    countHome = 0
    countGuest = 0
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    homeTeam.style.background = 'none'
    homeTeam.style.color = 'white'
    guestTeam.style.background = 'none'
    guestTeam.style.color = 'white'
}