function RandomIntColor() {
    return Math.round(Math.random() * 255);
}

function RandomColor() {
    var r = RandomIntColor();
    var g = RandomIntColor();
    var b = RandomIntColor();

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function SetRandomBgColor() {
    document.body.style.backgroundColor = RandomColor();
}