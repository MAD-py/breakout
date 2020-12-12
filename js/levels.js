import Bricks from "./infra/bricks.js";
import Circle from "./infra/circle.js";
import UserBar from "./infra/userBar.js";


export const level1 = () => {
    let bricks = [];
    let x;
    let y;

    for (let i = 0; i < 8; i++) {
        y = 35 + (25 * i);
        for (let j = 0; j < 16; j++) {
            x = 110 + (80 * j);
            bricks.push(
                new Bricks(10, "#33c7ff", "black", true, 80, 25, x, y)
            );
        }
    }

    let ball = new Circle("black", "black", 5, -5, 10, 750, 300);
    let userBar = new UserBar("#33c7ff", "balck", true, 100, 25, 700, 585);
    return [bricks, ball, userBar];
};
