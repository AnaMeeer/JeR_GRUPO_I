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
        this.load.bitmapFont('NierFont','./assets/font.png','./assets/font.fnt');
        this.load.bitmapFont('NierFontBlack', './assets/font2.png', './assets/font2.fnt');

        //Cosas que usa scene_Play
        this.load.image("lunaran", "./assets/nave.png");
        this.load.image("lunaran2", "./assets/nave2.png");
        this.load.image("malo", "./assets/star.png");
        this.load.image("bala", "./assets/bala.png");
        this.load.image("enemigo", "./assets/star.png");
        this.load.image("laser", "./assets/bullet11.png");
        this.load.image("barrera", "./assets/barrera.png");
        this.load.image("corazon", "./assets/corazon.png");
        this.load.image("fondoNegro", "./assets/fondoNegro.jpg");
        this.load.image('iconPausa', "./assets/icon_pausa.png");
        this.load.image('enemigoAncho', "./assets/enemigoAncho.png");

        //Cosas que usa EscenaPausa
        this.load.image("ImagenPausa", "./assets/Interfaz_Pausa.jpg");
        this.load.image("sfx", "./assets/sfx.png");
        this.load.image("quit", "./assets/quit.png");
        this.load.image("yes", "./assets/yes.png");
        this.load.image("no", "./assets/no.png");

        //Cosas que usa EscenaSonido
        this.load.image("musica", "./assets/musica.png");
        this.load.image("sonidos","./assets/sonidos.png");
        this.load.image("uno", "./assets/1.png");
        this.load.image("dos", "./assets/2.png");
        this.load.image("tres", "./assets/3.png");
        this.load.image("cuatro", "./assets/4.png");
        this.load.image("cinco", "./assets/5.png");
        this.load.image("seis", "./assets/6.png");
        this.load.image("siete", "./assets/7.png");
        this.load.image("ocho", "./assets/8.png");
        this.load.image("nueve", "./assets/9.png");
        this.load.image("diez", "./assets/10.png");
        this.load.image("mute","./assets/muted.png");
        this.load.image("back","./assets/icon_back.png");
        this.load.audio("musicaFondo","./assets/musicaFondo.mp3");

        //Cosas que usa EscenaFinal
        this.load.image("home", "./assets/icono_reinicio.png");
        
        this.load.audio('muerteEnemigo','./assets/muerteEnemigo.ogg');
        console.log("Se ha cargado la escena bootloader");
    }


}

export default Bootloader;