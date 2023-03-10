import CanvasUtil from './CanvasUtil.js';
import GameObject from './GameObjects/GameObject.js';

export default class Player extends GameObject {
  private speed: number;

  private animTick: number;

  private movingUp: boolean;

  private movingLeft:boolean;

  private movingRight:boolean;

  private movingDown:boolean;

  private animTickMax: number;

  private gender: string;

  public constructor(playerPosX: number, playerPosY: number) {
    super(playerPosX, playerPosY);
    this.animTick = 0;
    this.animTickMax = 600;
    this.image = CanvasUtil.loadNewImage('./assets/Player/malPlayerDown1.png');
    this.speed = 3;
    this.gender = 'mal';
  }

  /**
   * moveUp
   *
   *
   */
  public moveUp(): void {
    this.posY -= this.speed;
    this.movingUp = true;
  }

  /**
   * moveDown
   */
  public moveDown(): void {
    this.posY += this.speed;
    this.movingDown = true;
  }

  /**
   * moveLeft
   */
  public moveLeft(): void {
    this.posX -= this.speed;
    this.movingLeft = true;
  }

  /**
   * moveRight
   */
  public moveRight(): void {
    this.posX += this.speed;
    this.movingRight = true;
  }

  /**
   *
   */
  public changeGender(): void {
    if (this.gender === 'mal') this.gender = 'fem';
    else this.gender = 'mal';
    this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
  }

  /**
   * makes the character look at the screen.
   */
  public setBase(): void {
    this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
  }

  /**
   * @returns gets Gender
   */
  public getGender(): string {
    return this.gender;
  }

  /**
   *
   * stops
   */
  public animStop():void {
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

  /**
   * makes all the movings false
   */
  private makeMovingsFalse(): void {
    this.movingLeft = false;
    this.movingRight = false;
    this.movingUp = false;
    this.movingDown = false;
  }

  /**
   * all the animate logic
   */
  private animate(): void {
    // Resets animTick back to 0 if it passes animTickMax
    if (this.animTick >= this.animTickMax) { this.animTick = 0; }
    // if all directional buttons are pressed
    if (this.movingUp && this.movingDown && this.movingLeft && this.movingRight) {
      this.image = CanvasUtil.loadNewImage('./assets/Player/crab.png');
      this.makeMovingsFalse();
    } else if (this.movingUp && this.movingDown && this.movingLeft) {
      // case for moving left with both Y inputs true
      this.makeMovingsFalse();
      this.animateLeft();
    } else if (this.movingUp && this.movingDown && this.movingRight) {
      // case for moving right with both Y inputs true
      this.makeMovingsFalse();
      this.animateRight();
    } else if (this.movingUp && this.movingLeft && this.movingRight) {
      // case for moving up with both X inputs true
      this.animateUp();
      this.makeMovingsFalse();
    } else if (this.movingDown && this.movingLeft && this.movingRight) {
      // case for moving down with both X inputs true
      this.animateDown();
    } else if (this.movingUp && this.movingDown) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
      this.makeMovingsFalse();
    } else if (this.movingLeft && this.movingRight) {
      this.makeMovingsFalse();
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
    } else if (this.movingUp && this.movingLeft) {
      this.makeMovingsFalse();
      this.animateLeft();
    } else if (this.movingUp && this.movingRight) {
      this.makeMovingsFalse();
      this.animateRight();
    } else if (this.movingDown && this.movingLeft) {
      this.animateLeft();
    } else if (this.movingDown && this.movingRight) {
      this.animateRight();
    } else if (this.movingUp) {
      this.makeMovingsFalse();
      this.animateUp();
    } else if (this.movingDown) {
      this.animateDown();
    } else if (this.movingLeft) {
      this.animateLeft();
    } else if (this.movingRight) {
      this.animateRight();
    }
  }

  /**
   * debug function
   */
  private debugMove():void {
    console.log(`    Moving Up state= ${this.movingUp}
    Moving Down state= ${this.movingDown}
    Moving Left state= ${this.movingLeft}
    Moving Right state= ${this.movingRight}`);
  }

  /**
   * animates the character going up
   */
  private animateUp(): void {
    if (this.animTick <= this.animTickMax * 0.25) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp2.png`);
    } else if (this.animTick <= this.animTickMax * 0.50) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp3.png`);
    } else if (this.animTick <= this.animTickMax * 0.75) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp4.png`);
    } else {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerUp1.png`);
    }
  }

  /**
   * animates the character going down
   */
  private animateDown(): void {
    if (this.animTick <= this.animTickMax * 0.25) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown2.png`);
    } else if (this.animTick <= this.animTickMax * 0.50) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown3.png`);
    } else if (this.animTick <= this.animTickMax * 0.75) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown4.png`);
    } else {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerDown1.png`);
    }
  }

  /**
   * animates the character going left
   */
  private animateLeft(): void {
    if (this.animTick <= this.animTickMax * 0.25) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft2.png`);
    } else if (this.animTick <= this.animTickMax * 0.50) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft1.png`);
    } else if (this.animTick <= this.animTickMax * 0.75) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft2.png`);
    } else {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerLeft1.png`);
    }
  }

  /**
   * animates the character going right
   */
  private animateRight(): void {
    if (this.animTick <= this.animTickMax * 0.25) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight2.png`);
    } else if (this.animTick <= this.animTickMax * 0.50) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight1.png`);
    } else if (this.animTick <= this.animTickMax * 0.75) {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight2.png`);
    } else {
      this.image = CanvasUtil.loadNewImage(`./assets/Player/${this.gender}PlayerRight1.png`);
    }
  }

  /**
   *
   * @param elapsed updates the animation each ms
   */
  public update(elapsed: number): void {
    this.animTick += elapsed;
    this.animate();
  }

  /**
   * collideWithObject
   *
   * @param object ->
   * @returns true if collision happened
   */
  public collideWithObject(object: GameObject): boolean {
    return (this.posX < object.getPosX() + object.getWidth()
      && this.posX + this.image.width > object.getPosX()
      && this.posY < object.getPosY() + object.getHeight()
      && this.image.height + this.posY > object.getPosY());
  }
}
