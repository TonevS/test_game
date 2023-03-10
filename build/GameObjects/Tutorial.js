import CanvasUtil from '../CanvasUtil.js';
import GameObject from './GameObject.js';
export default class Tutorial extends GameObject {
    isActive;
    lang;
    constructor(lang) {
        super(40, 40);
        this.isActive = false;
        this.image = CanvasUtil.loadNewImage('./assets/Tutorial/tutorialPrompt.png');
        this.lang = lang;
    }
    update() {
        if (this.isActive) {
            this.image = CanvasUtil.loadNewImage(`./assets/Tutorial/${this.lang}/tutorial.png`);
            this.posX = 900;
            this.posY = 100;
        }
        else {
            this.image = CanvasUtil.loadNewImage('./assets/Tutorial/tutorialPrompt.png');
            this.posX = 40;
            this.posY = 40;
        }
    }
    setActive(status) {
        this.isActive = status;
    }
    getActive() {
        return this.isActive;
    }
}
//# sourceMappingURL=Tutorial.js.map