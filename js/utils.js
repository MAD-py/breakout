export const drawBricks = (bricks, ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let brick of bricks) {
        if (brick.isActive) {
            brick.draw(ctx);
        }
    }
}
