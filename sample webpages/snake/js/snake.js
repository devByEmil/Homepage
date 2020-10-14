import { ate_food } from "./food.js";

export const SNAKE_SPEED = 7;
export let snakeBody = [{x: 11, y: 10}, {x: 11, y: 11}, {x: 11, y: 12}];

export function update(inputDirection) {
    addSnakeElement();

    if (inputDirection) {
        if (inputDirection.x + inputDirection.y != 0) {
            for (let i = snakeBody.length - 2; i >= 0; i--) {
                snakeBody[i+1] = {...snakeBody[i]};
            }
        }
        snakeBody[0].x += inputDirection.x; 
        snakeBody[0].y -= inputDirection.y;
    }
}

export function draw(gameBoard) {
    snakeBody.forEach(element => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = element.y;
        snakeElement.style.gridColumnStart = element.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function snakeHeadPosition() {
    return snakeBody[0];
}

export function isOnSnakeBody(positionToBeTested) {
    for (let i = snakeBody.length - 1; i>=0; i--) {
        if (positionToBeTested.x === snakeBody[i].x && positionToBeTested.y === snakeBody[i].y) {
            return true;
        }
    }
}

function addSnakeElement() {
    if (ate_food) {
        let snakeBodyLastElement = snakeBody.length - 1;
        let newSnakeElement = {x: snakeBody[snakeBodyLastElement].x + 1, y: snakeBody[snakeBodyLastElement].y + 1};
        snakeBody.push(newSnakeElement);
    }
}