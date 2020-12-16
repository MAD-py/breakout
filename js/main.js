import User from "./infra/user.js";
import { drawBricks, goBall, startLevel, checkLive, checkLevel, checkPointsLives } from "./utils.js";

var user;
var userBar;
var ball;
var bricks;
var ctx;
var canvas;
var idAnimation;
var lvl = 1;

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

    let alert_game_over = document.getElementById("gameOver");
    let alert_win = document.getElementById("win");

    if (! alert_game_over.classList.contains("empty")) {
        alert_game_over.classList.add("empty");
    }

    if (! alert_win.classList.contains("empty")) {
        alert_win.classList.add("empty");
    }

    lvl = 1;
    canvas = document.getElementById("board");
    ctx = canvas.getContext("2d");

    [bricks, ball, userBar] = startLevel();
    idAnimation = window.requestAnimationFrame(goLevel);
});


const goLevel = () => {
    checkPointsLives(user);
    if (user.lives > 0 && lvl !== 99999 ) {
        checkLive(ball, bricks, userBar, user);
        [ball, bricks, userBar, lvl] = checkLevel(ball, bricks, userBar, lvl);
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawBricks(bricks, ctx);
        goBall(ball, bricks, userBar, user, ctx, canvas);
        userBar.draw(ctx);
        idAnimation = window.requestAnimationFrame(goLevel);
    } 
    else {
        window.cancelAnimationFrame(idAnimation);
        let div_img = document.getElementById("img");
        div_img.classList.add("image");

        let div_start = document.getElementById("start");
        div_start.classList.remove("empty");

        let div_canvas = document.getElementById("canvas");
        div_canvas.classList.add("empty");
        
        if (lvl === 99999) {
            let alert_win = document.getElementById("win");
            alert_win.classList.remove("empty");

            let textPointsWin = document.getElementById("pointswin");
            textPointsWin.innerHTML = user.name + ": " + user.points + " pt";
        }
        else {
            let alert_game_over = document.getElementById("gameOver");
            alert_game_over.classList.remove("empty");

            let textPointsGameOver = document.getElementById("pointsGameOver");
            textPointsGameOver.innerHTML = user.name + ": " + user.points + " pt";
        }
    }
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
