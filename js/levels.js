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

    let ball = new Circle("black", "black", 5, -5, 10, 750, 575);
    let userBar = new UserBar("#33c7ff", "balck", true, 100, 25, 700, 585);
    return [bricks, ball, userBar];
};


export const level2 = () => {
    let bricks = [];
    let x;
    let y;
    let ignore = 2;

    for (let i = 0; i < 8; i++) {
        y = 35 + (25 * i);
        for (let j = 0; j < 16; j++) {
            x = 110 + (80 * j);
            if (ignore === j) {
                ignore += 3;
                continue;
            }
            bricks.push(
                new Bricks(20, "#33c7ff", "black", true, 80, 25, x, y)
            );
        }
        ignore = 2;
    }
    return bricks;
}


export const level3 = () => {
    let bricks = [];
    let x;
    let y;
    
    let perimeterTop = [];
    let perimeterBottom = [];

    for  (let j = 0; j < 16; j++) {
        x = 110 + (80 * j);
        perimeterTop.push(
            new Bricks(30, "#33c7ff", "black", true, 80, 25, x, 35)
        );
    }

    for  (let j = 0; j < 16; j++) {
        x = 110 + (80 * j);
        perimeterBottom.push(
            new Bricks(30, "#33c7ff", "black", true, 80, 25, x, 210)
        );
    }


    for (let i = 1; i < 7; i++) {
        y = 35 + (25 * i);
        for (let j = 0; j < 16; j++) {
            x = 110 + (80 * j);
            if ([0, 7, 8, 15].includes(j)) {
                bricks.push(
                    new Bricks(30, "#33c7ff", "black", true, 80, 25, x, y)
                );
            }
            else if (!([0, 7, 8, 15].includes(j)) && ([3, 4].includes(i))) {
                bricks.push(
                    new Bricks(30, "#33c7ff", "black", true, 80, 25, x, y)
                );
            }
        }
    }

    bricks = bricks.concat(perimeterBottom);
    bricks = perimeterTop.concat(bricks);
    return bricks;
}
