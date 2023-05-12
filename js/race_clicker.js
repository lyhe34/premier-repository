var button;
var buttonContent;
var progressBar;

var width = 0;
var isRacing = false;
var id;

function startRace() {
    if(!isRacing) {
        isRacing = true;
        
        button = document.getElementById("race_clicker_button");
        buttonContent = document.getElementById("rc_button_content");
        progressBar = document.getElementById("bar");

        // Save default button's css, to reset it when race ends.
        var default_button_style = button.style;

        id = setInterval(barProgression, 10);

        button.onclick = "update()"
    }
}

function update() {
    if(isRacing) {
        progressBar.style.width = "0%";
    }
}

function barProgression() {
    if(width >= 100) {
        clearInterval(id);
        isRacing = false;
    } else {
        width++;
        progressBar.style.width = width + "%";
    }
}