function randomColor() {
    var r = randomRoundNumber(0, 255);
    var g = randomRoundNumber(0, 255);
    var b = randomRoundNumber(0, 255);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function setRandomBgColor() {
    document.body.style.backgroundColor = randomColor();
}