import Tutorial from '../GameObjects/Tutorial.js';
import MusicPlayer from '../MusicPlayer.js';
import SoundEffectPlayer from '../SoundEffectPlayer.js';
import Scene from './Scene.js';
export default class Level extends Scene {
    player;
    gameObjects = [];
    tutorial;
    isUsing;
    isTalking;
    isCorrect;
    goMainMenu;
    music;
    soundEffect;
    constructor(maxX, maxY, lang) {
        super(maxX, maxY, lang);
        this.soundEffect = new SoundEffectPlayer();
        this.music = new MusicPlayer();
        this.isTalking = false;
        this.isUsing = false;
        this.isCorrect = false;
        this.goMainMenu = false;
        this.tutorial = new Tutorial(this.lang);
    }
}
//# sourceMappingURL=Level.js.map