import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';

export default class Tutorial extends GameObject {
  private isActive: boolean;

  private lang: string;

  public constructor(lang: string) {
    super(40, 40);
    this.isActive = false;
    this.image = CanvasUtil.loadNewImage('./assets/Tutorial/tutorialPrompt.png');
    this.lang = lang;
  }

  /**
   *
   */
  public update(): void {
    if (this.isActive) {
      this.image = CanvasUtil.loadNewImage(`./assets/Tutorial/${this.lang}/tutorial.png`);
      this.posX = 900;
      this.posY = 100;
    } else {
      this.image = CanvasUtil.loadNewImage('./assets/Tutorial/tutorialPrompt.png');
      this.posX = 40;
      this.posY = 40;
    }
  }

  /**
   * setActive
   *
   * @param status open or closed, true or false
   */
  public setActive(status: boolean): void {
    this.isActive = status;
  }

  /**
   * getActive
   *
   * @returns whether the tutorial image is open or not, true for open, false for closed
   */
  public getActive(): boolean {
    return this.isActive;
  }
}
