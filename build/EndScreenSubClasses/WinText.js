import CanvasUtil from '../CanvasUtil.js';
import BouncyText from '../BouncyText.js';
export default class WinText extends BouncyText {
    constructor(posX, posY, speed, offset, topY, botY) {
        super(posX, posY, speed, topY, botY);
        this.image = CanvasUtil.loadNewImage('../assets/EndScreen/winText.png');
    }
}
//# sourceMappingURL=WinText.js.map