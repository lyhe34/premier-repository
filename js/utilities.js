/**
 * @param {HTMLElement} element1
 * @param {HTMLElement} element2
 */ 

function isOverlap(element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom)
}

function randomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function randomRoundNumber(min, max) {
    return Math.round(randomNumber(min, max));
}

/**
 * @param {HTMLElement} element
 */
function randomPosition(element) {
    return [randomRoundNumber(20, 80), randomNumber(20, 80)];
}