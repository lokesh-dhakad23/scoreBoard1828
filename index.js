let scoreBrd = document.getElementById("score-el");
let scoreBod = document.getElementById("score-nl");
let score = 0;

function clickp() {
    score = score + 1
    scoreBrd.textContent = score
}

function clickpp() {
    score = score + 2
    scoreBrd.textContent = score
}

function clickppp() {
    score = score + 3
    scoreBrd.textContent = score
}

let scoreEl = 0;

function clickl() {
    scoreEl = scoreEl + 1
    scoreBod.textContent = scoreEl
}

function clickll() {
    scoreEl = scoreEl + 2
    scoreBod.textContent = scoreEl
}

function clicklll() {
    scoreEl = scoreEl + 3
    scoreBod.textContent = scoreEl
}

function resetEl() {
    score = 0
    scoreEl = 0
    scoreBrd.textContent = score
    scoreBod.textContent = scoreEl
}
