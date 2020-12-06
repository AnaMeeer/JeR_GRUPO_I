
import Bootloader from './bootloader.js'
import MenuPrincipal from './scenes/MenuPrincipal.js'
import scene_Play from './scenes/scene_Play.js'
import EscenaPausa from './scenes/EscenaPausa.js'
const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 500,
    parent: 'container',
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }

    },
    scene: [Bootloader, MenuPrincipal, scene_Play, EscenaPausa]
};

new Phaser.Game(config);

function preload() {

};

function create() {

};

function update() {

};