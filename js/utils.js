export const drawBricks = (bricks, ctx) => {
    for (let brick of bricks) {
        if (brick.isActive) {
            brick.draw(ctx);
        }
    }
}


export const goBall = (ball, bricks, userBar, ctx, canvas) => {
    ball.move(canvas);
    ball.collisions(bricks, userBar);
    ball.draw(ctx);
}
