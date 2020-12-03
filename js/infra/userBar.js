import Rectangle from "./rectangle";

export default class UserBar extends Rectangle {
    #speed;

    constructor(colorFiller, colorBorder, isActive, width, height, x, y) {
        super(colorFiller, colorBorder, isActive, width, height, x, y);
        
        this.#speed = 10;
    }

    get speed() {
        return this.#speed;
    }

    set speed(newSpeed) {
        this.#speed = newSpeed;
    }

    move(canvas) {
        super.move(canvas, this.#speed, 0);
    }
}