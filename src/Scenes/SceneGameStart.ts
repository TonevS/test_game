import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import SceneMainMenu from './SceneMainMenu.js';

export default class SceneGameStart extends Scene {
  private starting: boolean;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.background = CanvasUtil.loadNewImage('./assets/backgroundGameStart.png');
  }

  /**
   * if Space is pressed then start the game
   *
   * @param keyListener see if player pressed Space
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_1)) {
      this.lang = 'en';
      this.starting = true;
    }
    if (keyListener.keyPressed(KeyListener.KEY_2)) {
      this.lang = 'nl';
      this.starting = true;
    }
  }

  /**
   * @returns next Scene
   */
  public update(): Scene {
    if (this.starting) {
      return new SceneMainMenu(this.maxX, this.maxY, this.lang);
    }

    return null;
  }

  /**
   *
   * @param canvas background jpg
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(
      canvas,
      this.background,
      0,
      0,
    );
  }
}
