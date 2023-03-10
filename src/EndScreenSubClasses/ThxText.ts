import CanvasUtil from '../CanvasUtil.js';
import BouncyText from '../BouncyText.js';

export default class ThxText extends BouncyText {
  public constructor(posX: number, posY: number, speed?: number, offset?: number, topY?: number, botY?: number) {
    super(posX, posY, speed, topY, botY);
    this.image = CanvasUtil.loadNewImage('../assets/EndScreen/thxText.png');
  }
}
