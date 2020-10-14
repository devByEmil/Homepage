let inputDirection = {x: 0, y: 0};
let lastInputDirection = inputDirection;
let lastDirectionChange = Date.now() + 20;

const buttons = [".button--up", ".button--down", ".button--right", ".button--left"];

window.addEventListener("keydown", e => {
    switch (e.key){
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
    }
});

document.querySelector(buttons[0]).addEventListener("click", e => {
    moveUp();
});
document.querySelector(buttons[1]).addEventListener("click", e => {
    moveDown();
});
document.querySelector(buttons[2]).addEventListener("click", e => {
    moveRight();
});
document.querySelector(buttons[3]).addEventListener("click", e => {
    moveLeft();
});

export function getInputDirection() {
    return inputDirection;
}

function moveUp() {
    if (lastDirectionChangeEnoughTimeAway()) {
        if (lastInputDirection.y !== 0) return;
        inputDirection = {x: 0, y: 1};
        lastInputDirection = inputDirection;
    }
}
function moveDown() {
    if (lastDirectionChangeEnoughTimeAway()) {
        if (lastInputDirection.y !== 0 || inputDirection.x + inputDirection.y === 0) return;
        inputDirection = {x: 0, y: -1};
        lastInputDirection = inputDirection;
    }
}
function moveLeft() {
    if (lastDirectionChangeEnoughTimeAway()) {
        if (lastInputDirection.x !== 0) return;
        inputDirection = {x: -1, y: 0};
        lastInputDirection = inputDirection;
    }
}
function moveRight() {
    if (lastDirectionChangeEnoughTimeAway()) {
        if (lastInputDirection.x !== 0) return;
        inputDirection = {x: 1, y: 0};
        lastInputDirection = inputDirection;
    }
}

function lastDirectionChangeEnoughTimeAway() {
    if ( Date.now() - lastDirectionChange > 90) {
        lastDirectionChange = Date.now();
        return true;
    }
}