import User from "./infra/user.js";
import { level1 } from "./levels.js";
import { drawBricks, goBall } from "./utils.js";

var user;
var userBar;
var ball;
var bricks;
var ctx;
var canvas;

let start = document.getElementsByTagName("button")[0];
let body = document.getElementsByTagName("body")[0];


start.addEventListener("click", () => {
    let div_img = document.getElementById("img");
    div_img.classList.remove("image");

    let div_start = document.getElementById("start");
    div_start.classList.add("empty");

    let div_canvas = document.getElementById("canvas");
    div_canvas.classList.remove("empty");

    let input_name = document.getElementById("name");
    user = new User(input_name.value);

    canvas = document.getElementById("board");
    ctx = canvas.getContext("2d");

    [bricks, ball, userBar] = level1();
    window.requestAnimationFrame(goLevel);
});


const goLevel = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBricks(bricks, ctx);
    goBall(ball, bricks, userBar, ctx, canvas);
    userBar.draw(ctx);
    window.requestAnimationFrame(goLevel);
}


body.addEventListener("keydown", (event) => {
    let key = event.key;
    switch (key) {
        case "ArrowLeft":
            userBar.move(canvas, -1);
            break;
        case "ArrowRight":
            userBar.move(canvas, 1);
            break;
        default:
            return
    }
});
