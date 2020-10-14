import { snakeBody } from "./snake.js";

export function isGameOver() {
    for (let i = snakeBody.length - 1; i > 0; i--) {
        if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
            gameOver();
        }
    }
    if (snakeBody[0].x <= 0 || snakeBody[0].y <= 0 || snakeBody[0].x > 21 || snakeBody[0].y > 21) {
        gameOver();
    }
}

function gameOver() {
    location.reload();
    return false;
}