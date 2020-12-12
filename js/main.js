import User from "./infra/user.js";
import { level1 } from "./levels.js";
import { drawBricks } from "./utils.js"

var user;
var bricks;
var ctx;
var canvas;

let start = document.getElementsByTagName("button")[0];


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

    bricks = level1();
    window.requestAnimationFrame(goLevel);
});

const goLevel = () => {
    drawBricks(bricks, ctx, canvas);
    console.log(user)
    window.requestAnimationFrame(goLevel);
}
