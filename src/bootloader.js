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
        this.load.atlas('EnemigoBasico', 'assets/EnemigoBasico.png', './assets/EnemigoBasico.json');
        this.load.image('fondo', './assets/white-background-2.jpg');
        this.load.audio('prueba', "./assets/NeverSurrender.ogg")
        this.load.audio('click1', "./assets/click1.ogg")
        this.load.audio('click2', "./assets/click2.ogg")

        //Cosas que usa scene_Play
        this.load.image("lunaran", "./assets/nave.png");
        this.load.image("lunaran2", "./assets/nave2.png");
        this.load.image("malo","./assets/star.png");
        this.load.image("bala", "./assets/bala.png");
        this.load.image("enemigo", "./assets/star.png");
        this.load.image("laser", "./assets/bullet11.png");
        this.load.image("barrera", "./assets/barrera.png");
        this.load.image("corazon", "./assets/corazon.png");
      
        console.log("Se ha cargado la escena bootloader");
    }


}

export default Bootloader;