import { snakeHeadPosition } from "./snake.js";
import { isOnSnakeBody } from "./snake.js";

export let ate_food;
let foodElement;
generateNewFoodOnStart();

export function update() {
    ate_food = ateFood(snakeHeadPosition());
    if (ate_food) {
        generateNewFood();
    }
}

export function draw(gameBoard) {  
    const element = document.createElement("div");
    element.style.gridRowStart = foodElement.y;
    element.style.gridColumnStart = foodElement.x;
    element.classList.add("food");
    gameBoard.appendChild(element);
}

export function ateFood(headPostion) {
    if (headPostion.x === foodElement.x && headPostion.y === foodElement.y) {
        return true;
    }
}

function generateNewFood() {
    let newFoodElement = {x: randomGridNumber(), y: randomGridNumber()};
    while (isOnSnakeBody(newFoodElement)) {
        newFoodElement = {x: randomGridNumber(), y: randomGridNumber()};
    }
    foodElement = newFoodElement;
}

function generateNewFoodOnStart() {
    foodElement = {x: randomGridNumberForStart(), y: randomGridNumberForStart()};
}

function randomGridNumber() {
    return Math.floor(Math.random() * 21) + 1;
}

//Random Grid number for startup without x-line 11, to avoid the food to be on or in line with start-position of snake
function randomGridNumberForStart() {
    let number = Math.floor(Math.random() * 21 ) + 1;
    while (number === 11) {
        number = Math.floor(Math.random() * 21 ) + 1;
    }
    return number;
}