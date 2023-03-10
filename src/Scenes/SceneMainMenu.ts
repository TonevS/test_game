import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import LevelOne from './LevelOne.js';
import Scene from './Scene.js';
import MusicPlayer from '../MusicPlayer.js';
import LevelTwo from './LevelTwo.js';
import SceneEnd from './SceneEnd.js';

export default class SceneMainMenu extends Scene {
  private starting: boolean;

  private music: MusicPlayer;

  // choice - 0 to 3 => 1 for LevelOne, 2 for LevelTwo, 3 for LevelThree
  private choice: number;

  public constructor(maxX: number, maxY: number, lang: string) {
    super(maxX, maxY, lang);
    this.starting = false;
    this.background = CanvasUtil.loadNewImage('./assets/backgroundSceneStart.png');
    this.choice = 0;
    this.music = new MusicPlayer();

    this.music.playSound('mainMenu');
  }

  /**
   * if ENTER is pressed then start the game
   *
   * @param keyListener see if player clicked 1, 2 or 3
   */
  public processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_1)) {
      this.starting = true;
      this.choice = 1;
    }
    if (keyListener.keyPressed(KeyListener.KEY_2)) {
      this.starting = true;
      this.choice = 2;
    }
    if (keyListener.keyPressed(KeyListener.KEY_3)) {
      this.starting = true;
      this.choice = 3;
    }
  }

  /**
   * @returns next Scene
   */
  public update(): Scene {
    if (this.starting) {
      switch (this.choice) {
        case 1:
          this.music.stopSound();
          return new LevelOne(this.maxX, this.maxY, this.lang);
        case 2:
          this.music.stopSound();
          return new LevelTwo(this.maxX, this.maxY, this.lang);
        case 3:
          this.music.stopSound();
          return new SceneEnd(this.maxX, this.maxY);
        default:
          break;
      }
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
