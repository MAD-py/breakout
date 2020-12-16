import Rectangle from "./rectangle.js";

export default class UserBar extends Rectangle {
    #speed;

    constructor(colorFiller, colorBorder, isActive, width, height, x, y) {
        super(colorFiller, colorBorder, isActive, width, height, x, y);
        
        this.#speed = 35;
    }

    get speed() {
        return this.#speed;
    }

    set speed(newSpeed) {
        this.#speed = newSpeed;
    }

    move(canvas, orientation) {
        super.move(canvas, this.#speed * orientation, 0, super.width);
    }
}