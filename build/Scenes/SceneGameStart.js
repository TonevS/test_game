import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import SceneMainMenu from './SceneMainMenu.js';
export default class SceneGameStart extends Scene {
    starting;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.background = CanvasUtil.loadNewImage('./assets/backgroundGameStart.png');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_1)) {
            this.lang = 'en';
            this.starting = true;
        }
        if (keyListener.keyPressed(KeyListener.KEY_2)) {
            this.lang = 'nl';
            this.starting = true;
        }
    }
    update() {
        if (this.starting) {
            return new SceneMainMenu(this.maxX, this.maxY, this.lang);
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
    }
}
//# sourceMappingURL=SceneGameStart.js.map