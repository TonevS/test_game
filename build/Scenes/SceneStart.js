import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import LevelOne from './LevelOne.js';
import Scene from './Scene.js';
import MusicPlayer from '../MusicPlayer.js';
import LevelTwo from './LevelTwo.js';
import SceneEnd from './SceneEnd.js';
export default class SceneStart extends Scene {
    starting;
    music;
    choice;
    constructor(maxX, maxY) {
        super(maxX, maxY);
        this.starting = false;
        this.background = CanvasUtil.loadNewImage('./assets/backgroundSceneStart.png');
        this.choice = 0;
        this.music = new MusicPlayer();
        this.music.playSound('mainMenu');
    }
    processInput(keyListener) {
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
    update() {
        if (this.starting) {
            switch (this.choice) {
                case 1:
                    this.music.stopSound();
                    return new LevelOne(this.maxX, this.maxY);
                case 2:
                    this.music.stopSound();
                    return new LevelTwo(this.maxX, this.maxY);
                case 3:
                    this.music.stopSound();
                    return new SceneEnd(this.maxX, this.maxY);
                default:
                    break;
            }
        }
        return null;
    }
    render(canvas) {
        CanvasUtil.drawImage(canvas, this.background, 0, 0);
    }
}
//# sourceMappingURL=SceneStart.js.map