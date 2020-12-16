import { level1, level2, level3 } from "./levels.js";


export const drawBricks = (bricks, ctx) => {
    for (let brick of bricks) {
        if (brick.isActive) {
            brick.draw(ctx);
        }
    }
}


export const goBall = (ball, bricks, userBar, user, ctx, canvas) => {
    ball.move(canvas);
    ball.collisions(bricks, userBar, user);
    ball.draw(ctx);
}


export const checkLive = (ball, bricks, userBar, user) => {
    if (ball.speedX === 0 && ball.speedY === 0) {
        for (let brick of bricks) {
            if (!brick.isActive) {
                user.points -= brick.points;
                brick.isActive = true;
            }
        }
        reset(ball, userBar);
        user.lives -= 1 ;
    }
}


export const startLevel = () => {
    let [bricks, ball, userBar] = level1();
    return [bricks, ball, userBar];
}


export const checkLevel = (ball, bricks, userBar, lvl) => {
    let bricksCheck = bricks.filter(b => b.isActive);
    if  (bricksCheck.length === 0) {
        switch (lvl) {
            case 1:
                bricks = level2();
                lvl += 1;
                reset(ball, userBar);
                break;
            case 2:
                bricks = level3();
                lvl += 1;
                reset(ball, userBar);
                break;
            case 3:
                ball.speedX = 0;
                ball.speedY = 0;
                lvl = 99999;
                break;
        }
    }
    return [ball, bricks, userBar, lvl];
}
 

export const checkPointsLives = (user) => {
    let points = document.getElementById("points");
    points.innerHTML = user.points;

    let lives = document.getElementById("lives");
    lives.innerHTML = user.lives;
}


const reset = (ball, userBar) => {
    ball.x = 750;
    ball.y = 575;
    ball.speedX = 5;
    ball.speedY = -5;
    userBar.x = 700;
    userBar.y = 585;
}
