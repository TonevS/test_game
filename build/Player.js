import CanvasUtil from './CanvasUtil.js';
import GameObject from './GameObjects/GameObject.js';
export default class Player extends GameObject {
    speed;
    animTick;
    movingUp;
    movingLeft;
    movingRight;
    movingDown;
    animTickMax;
    gender;
    constructor(playerPosX, playerPosY) {
        super(playerPosX, playerPosY);
        this.animTick = 0;
        this.animTickMax = 600;
        this.image = CanvasUtil.loadNewImage('./assets/Player/malPlayerDown1.png');
        this.speed = 3;
        this.gender = 'mal';
    }
    moveUp() {
        this.posY -= this.speed;
        this.movingUp = true;
    }
    moveDown() {
        this.posY += this.speed;
        this.movingDown = true;
    }
    moveLeft() {
        this.posX -= this.speed;
        this.movingLeft = true;
    }
    moveRight() {
        this.posX += this.speed;
        this.movingRight = true;
    }
    changeGender() {
        if (this.gender === 'mal')
            this.gender = 'fem';
        else
            this.gender = 'mal';
        this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
    }
    setBase() {
        this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
    }
    getGender() {
        return this.gender;
    }
    animStop() {
        if (this.movingUp) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp1.png`);
            this.movingUp = false;
        }
        if (this.movingDown) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
            this.movingDown = false;
        }
        if (this.movingLeft) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft1.png`);
            this.movingLeft = false;
        }
        if (this.movingRight) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight1.png`);
            this.movingRight = false;
        }
    }
    makeMovingsFalse() {
        this.movingLeft = false;
        this.movingRight = false;
        this.movingUp = false;
        this.movingDown = false;
    }
    animate() {
        if (this.animTick >= this.animTickMax) {
            this.animTick = 0;
        }
        if (this.movingUp && this.movingDown && this.movingLeft && this.movingRight) {
            this.image = CanvasUtil.loadNewImage('./assets/Player/crab.png');
            this.makeMovingsFalse();
        }
        else if (this.movingUp && this.movingDown && this.movingLeft) {
            this.makeMovingsFalse();
            this.animateLeft();
        }
        else if (this.movingUp && this.movingDown && this.movingRight) {
            this.makeMovingsFalse();
            this.animateRight();
        }
        else if (this.movingUp && this.movingLeft && this.movingRight) {
            this.animateUp();
            this.makeMovingsFalse();
        }
        else if (this.movingDown && this.movingLeft && this.movingRight) {
            this.animateDown();
        }
        else if (this.movingUp && this.movingDown) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
            this.makeMovingsFalse();
        }
        else if (this.movingLeft && this.movingRight) {
            this.makeMovingsFalse();
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
        }
        else if (this.movingUp && this.movingLeft) {
            this.makeMovingsFalse();
            this.animateLeft();
        }
        else if (this.movingUp && this.movingRight) {
            this.makeMovingsFalse();
            this.animateRight();
        }
        else if (this.movingDown && this.movingLeft) {
            this.animateLeft();
        }
        else if (this.movingDown && this.movingRight) {
            this.animateRight();
        }
        else if (this.movingUp) {
            this.makeMovingsFalse();
            this.animateUp();
        }
        else if (this.movingDown) {
            this.animateDown();
        }
        else if (this.movingLeft) {
            this.animateLeft();
        }
        else if (this.movingRight) {
            this.animateRight();
        }
    }
    debugMove() {
        console.log(`    Moving Up state= ${this.movingUp}
    Moving Down state= ${this.movingDown}
    Moving Left state= ${this.movingLeft}
    Moving Right state= ${this.movingRight}`);
    }
    animateUp() {
        if (this.animTick <= this.animTickMax * 0.25) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp2.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.50) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp3.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.75) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp4.png`);
        }
        else {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp1.png`);
        }
    }
    animateDown() {
        if (this.animTick <= this.animTickMax * 0.25) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown2.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.50) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown3.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.75) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown4.png`);
        }
        else {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
        }
    }
    animateLeft() {
        if (this.animTick <= this.animTickMax * 0.25) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft2.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.50) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft1.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.75) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft2.png`);
        }
        else {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft1.png`);
        }
    }
    animateRight() {
        if (this.animTick <= this.animTickMax * 0.25) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight2.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.50) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight1.png`);
        }
        else if (this.animTick <= this.animTickMax * 0.75) {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight2.png`);
        }
        else {
            this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight1.png`);
        }
    }
    update(elapsed) {
        this.animTick += elapsed;
        this.animate();
    }
    collideWithObject(object) {
        return (this.posX < object.getPosX() + object.getWidth()
            && this.posX + this.image.width > object.getPosX()
            && this.posY < object.getPosY() + object.getHeight()
            && this.image.height + this.posY > object.getPosY());
    }
}
//# sourceMappingURL=Player.js.map