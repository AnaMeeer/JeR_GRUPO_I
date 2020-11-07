
import Bootloader from './bootloader.js'
import MenuPrincipal from './scenes/MenuPrincipal.js'
import EscenaPrueba from './scenes/EscenaPrueba.js'
const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 800,
    parent: 'container',
    scene: [Bootloader,MenuPrincipal,EscenaPrueba]
};

new Phaser.Game(config);

function preload(){

};

function create(){

};

function update(){

};