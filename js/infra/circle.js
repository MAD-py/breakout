import Vertice from "./vertice.js";


export default class Circle extends Vertice {
    #colorFiller;
    #colorBorder;
    #speedX;
    #speedY;
    #radius;
    
    constructor(colorFiller, colorBorder, speedX, speedY, radius, x, y) {
        super(x, y);

        this.#colorFiller = colorFiller;
        this.#colorBorder = colorBorder;
        this.#speedX = speedX;
        this.#speedY = speedY;
        this.#radius = radius;
    }

    get colorFiller() {
        return this.#colorFiller;
    }

    get colorBorder() {
        return this.#colorBorder;
    }

    get speedX() {
        return this.#speedX;
    }

    get speedY() {
        return this.#speedY;
    }

    get radius() {
        return this.#radius;
    }

    set colorFiller(newColorFiller) {
        this.#colorFiller = newColorFiller;
    }

    set colorBorder(newColorBorder) {
        this.#colorBorder = newColorBorder;
    }

    set speedX(newSpeed) {
        this.#speedX = newSpeed;
    }

    set speedY(newSpeed) {
        this.#speedY = newSpeed;
    }

    set radius(newRadius) {
        this.#radius = newRadius;
    }

    move(canvas) {
        let new_x = super.x + this.#speedX;
        let new_y = super.y + this.#speedY;

        if (new_x + this.#radius >= canvas.width || new_x - this.#radius <= 0) {
            this.#speedX *= -1;
        }
        if (new_y + this.#radius >= canvas.height) {
            this.#speedY = 0;
            this.#speedX = 0;
        } else if (new_y - this.#radius <= 0) {
            this.#speedY *= -1;
        }

        super.move(canvas, this.#speedX, this.#speedY, this.#radius);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.#colorBorder;
        ctx.fillStyle = this.#colorFiller;
        ctx.arc(super.x, super.y, this.#radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    #collision(rectangle) {
        let rectanglePerimeterX = super.x;
        if (rectanglePerimeterX < rectangle.x) {
            rectanglePerimeterX = rectangle.x;
        }
        if (rectanglePerimeterX > rectangle.x + rectangle.width) {
            rectanglePerimeterX = rectangle.x + rectangle.width;
        }

        let rectanglePerimeterY = super.y;
        if (rectanglePerimeterY < rectangle.y) {
            rectanglePerimeterY = rectangle.y;
        }
        if (rectanglePerimeterY > rectangle.y + rectangle.height) {
            rectanglePerimeterY = rectangle.y + rectangle.height;
        }

        let distance = Math.sqrt(
            (super.x - rectanglePerimeterX)**2 + (super.y - rectanglePerimeterY)**2
        );

        if (distance < this.#radius) {
            return true;
        }
        return false
    }

    collisions(bricks, userBar, user) {
        let collision;

        for (let brick of bricks) {
            if (brick.isActive) {
                collision = this.#collision(brick);
                if (collision) {
                    brick.isActive = false;
                    user.points += brick.points;

                    if (super.x >= brick.x && super.x < brick.x + brick.width) {
                        this.#speedY *= -1;
                    }
                    else {
                        this.#speedX *= -1;
                    }
                    break;
                }
            }
            
        }

        collision = this.#collision(userBar);
        if (collision) {
            if (this.#speedX > 0) {
                if (super.x >= userBar.x && super.x < userBar.x + userBar.width/2){
                    this.speedY *= -1;
                    this.speedX *= -1;
                }
                else if (
                    super.x >= userBar.x + userBar.width/2 && 
                    super.x < userBar.x + userBar.width
                ){
                    this.speedY *= -1;
                }
            }
            else {
                if (
                    super.x >= userBar.x + userBar.width/2 && 
                    super.x < userBar.x + userBar.width
                ){
                    this.speedY *= -1;
                    this.speedX *= -1;
                }
                else if (super.x >= userBar.x && super.x < userBar.x + userBar.width/2){
                    this.speedY *= -1;
                }
            }
        }
    }
}
