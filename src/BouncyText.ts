import Drawable from './Drawable.js';

export default abstract class BouncyText extends Drawable {
  protected topY: number;

  protected botY: number;

  protected reachedTop: boolean;

  protected moveSpeed: number;

  protected offset: number;

  public constructor(posX: number, posY: number, speed?: number, offset?: number, topY?: number, botY?: number) {
    super();
    this.reachedTop = true;
    this.posX = posX;
    this.posY = posY;
    this.moveSpeed = 0.1;
    this.offset = 10;
    if (offset) this.offset = offset;
    this.topY = posY - this.offset;
    this.botY = posY + this.offset;

    if (speed) this.moveSpeed = speed;
    if (topY) this.topY = topY;
    if (botY) this.botY = botY;
  }

  /**
   * update
   *
   */
  public update(): void {
    if (this.posY >= this.topY && !this.reachedTop) {
      if (this.posY >= this.topY + Math.abs(this.topY - this.botY) * 0.8) {
        this.posY -= this.moveSpeed;
      } else {
        this.posY -= this.moveSpeed * 0.6;
      }
      this.reachedTop = this.posY <= this.topY;
    } else if (this.posY <= this.botY && this.reachedTop) {
      if (this.posY <= this.botY - Math.abs(this.topY - this.botY) * 0.8) {
        this.posY += this.moveSpeed;
      } else {
        this.posY += this.moveSpeed * 0.6;
      }
    } else {
      this.reachedTop = false;
    }
  }
}
