import Bootloader from './bootloader.js';
import scene_Play from './scenes/scene_Play.js';
const config = {
    width: 640,
    height: 400,
    parent: "contenedor",
    physics:{
        default: "arcade"
    },
    scene: [Bootloader, scene_Play]
}
new Phaser.Game(config);