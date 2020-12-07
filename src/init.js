
import Bootloader from './bootloader.js'
import MenuPrincipal from './scenes/MenuPrincipal.js'
import scene_Play from './scenes/scene_Play.js'
import EscenaPausa from './scenes/EscenaPausa.js'
import EscenaSonido from './scenes/EscenaSonido.js'
const config = {
    type: Phaser.CANVAS,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'container',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 900,
        height: 500
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }

    },
    scene: [Bootloader, EscenaSonido, EscenaPausa, scene_Play, MenuPrincipal]
};

new Phaser.Game(config);

function preload() {

};

function create() {

};

function update() {

};