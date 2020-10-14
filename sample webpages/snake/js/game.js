import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { isGameOver } from "./gameOver.js";
import { getInputDirection } from "./input.js";

let lastRenderTime = 0;
const gameBoard = document.querySelector(".game-board");

function main(currentTime) {
    window.requestAnimationFrame(main);

    const secondsSinceLastRendertime = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRendertime < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;

    update();
    draw();
    isGameOver();
}
window.requestAnimationFrame(main);

function update() {
    updateSnake(getInputDirection());
    updateFood();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}