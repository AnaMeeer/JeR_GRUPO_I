//Se encargará de precargas las imágenes

class Bootloader extends Phaser.Scene {

    constructor() {
        super({ key: "Bootloader" });
    }

    preload() {
        this.load.on("complete", () => { //hasta que no se carguen todas las imágenes/sprites, no se cargará la siguiente escena 
            this.scene.start("MenuPrincipal");
        });
        this.load.atlas('anim_intro', 'assets/Anim_Intro.png', './assets/Anim_Intro.json'); //nombre que le damos, donde está el json, nombre de la carpeta
        this.load.atlas('anim_apertura', 'assets/Anim_Apertura.png', './assets/Anim_Apertura.json');
        this.load.atlas('anim_boton', 'assets/Anim_Boton.png', './assets/Anim_Boton.json');
        this.load.image('fondo', './assets/white-background-2.jpg');
        console.log("Se ha cargado la escena bootloader")
    }

    
}

export default Bootloader;