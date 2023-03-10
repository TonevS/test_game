import CanvasUtil from '../CanvasUtil.js';
import ThxText from '../EndScreenSubClasses/ThxText.js';
import WinText from '../EndScreenSubClasses/WinText.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import MusicPlayer from '../MusicPlayer.js';
import SceneGameStart from './SceneGameStart.js';
export default class SceneEnd extends Scene {
    starting;
    thxText;
    winText;
    music;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.winText = new WinText((maxX / 2) - 322.5, 300);
        this.thxText = new ThxText((maxX / 2) - 431.5, 600);
        this.music = new MusicPlayer();
        this.starting = false;
        this.music.playSound('endMusic');
        this.background = CanvasUtil.loadNewImage('./assets/endScreen.png');
    }
    processInput(keyListener) {
        if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
            this.starting = true;
        }
    }
    update() {
        if (this.starting) {
            this.music.stopSound();
            return new SceneGameStart(this.maxX, this.maxY);
        }
        this.thxText.update();
        this.winText.update();
        return null;
    }
    render(canvas) {
        CanvasUtil.clearCanvas(canvas);
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
        this.thxText.render(canvas);
        this.winText.render(canvas);
    }
}
//# sourceMappingURL=SceneEnd.js.map