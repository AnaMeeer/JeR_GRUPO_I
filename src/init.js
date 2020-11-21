
import Bootloader from './bootloader.js'
import MenuPrincipal from './scenes/MenuPrincipal.js'
import scene_Play from './scenes/scene_Play.js'
const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 800,
    parent: 'container',
    physics:{
        default: "arcade"
    },
    scene: [Bootloader, MenuPrincipal, scene_Play]
};

new Phaser.Game(config);

function preload() {

};

function create() {

};

function update() {

};