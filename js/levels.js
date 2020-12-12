import Rectangle from "./infra/rectangle.js";


export const level1 = () => {
    let bricks = [];
    let x;
    let y;

    for (let i = 0; i < 8; i++) {
        y = 35 + (25 * i);
        for (let j = 0; j < 16; j++) {
            x = 110 + (80 * j);
            bricks.push(
                new Rectangle("#33c7ff", "black", true, 80, 25, x, y)
            );
        }
    }
    return bricks;
};


export const level2 = () => {
    let bricks = [];
    let x;
    let y;

    for (let i = 0; i < 8; i++) {
        y = 35 + (25 * i);
        for (let j = 0; j < 16; j++) {
            x = 110 + (80 * j);
            bricks.push(
                new Rectangle("#33c7ff", "black", true, 80, 25, x, y)
            );
        }
    }
    return bricks;
};
