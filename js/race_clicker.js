/** @type {HTMLElement} */ 
var button;

/** @type {HTMLElement} */
var buttonContent;

/** @type {HTMLElement} */
var progressBar;

/** @type {CSSStyleDeclaration} */
var defaultButtonStyle;

var width = 0;
var isRacing = false;
var id;

var speed = 1.5;

var score = 0;

function startRace() {
    if(!isRacing) {
        isRacing = true;
        
        button = document.getElementById("race_clicker_button");
        buttonContent = document.getElementById("rc_button_content");
        progressBar = document.getElementById("bar");

        // Save default button's css, to reset it when race ends.
        defaultButtonStyle = button.style;

        id = setInterval(barProgression, 10);

        buttonContent.innerHTML = score;

        repositionButton();

        button.setAttribute("onclick", "update()");
    }
}

function update() {
    if(isRacing) {
        resetBar();
        score++;
        buttonContent.innerHTML = score;
        repositionButton();
    }
}

function repositionButton() {
    var newPosition = randomPosition();
    button.style.top = newPosition[0] + "%";
    button.style.left = newPosition[1] + "%";
}

function barProgression() {
    if(width >= 100) {
        resetButton();
    } else {
        width += speed;
        progressBar.style.width = width + "%";
    }
}

function resetBar() {
    width = 0;
    progressBar.style.width = "0%";
}

function resetButton() {
    resetBar();
    clearInterval(id);
    isRacing = false;
    button.style = defaultButtonStyle;
    buttonContent.innerHTML = "Race Clicker";
    score = 0;
    button.setAttribute("onclick", "startRace()");
}