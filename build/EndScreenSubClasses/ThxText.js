import CanvasUtil from '../CanvasUtil.js';
import BouncyText from '../BouncyText.js';
export default class ThxText extends BouncyText {
    constructor(posX, posY, speed, offset, topY, botY) {
        super(posX, posY, speed, topY, botY);
        this.image = CanvasUtil.loadNewImage('../assets/EndScreen/thxText.png');
    }
}
//# sourceMappingURL=ThxText.js.map