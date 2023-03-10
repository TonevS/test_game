import KeyListener from '../KeyListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected lang: string;

  protected background: HTMLImageElement;

  public constructor(maxX: number, maxY: number, lang?: string) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.lang = lang;
  }

  public abstract processInput(keyListener: KeyListener): void;
  public abstract update(elapsed: number): Scene;
  public abstract render(canvas: HTMLCanvasElement): void;
}
