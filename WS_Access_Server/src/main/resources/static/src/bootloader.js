//Se encargará de precargas las imágenes

class Bootloader extends Phaser.Scene {

    constructor() {
        super({key: "Bootloader"});
    }

    preload() {
        this.load.on("complete", () => { //hasta que no se carguen todas las imágenes/sprites, no se cargará la siguiente escena 
            this.scene.start("MenuPrincipal");
        });


        //Cosas que usa la escena del lobby
        this.load.image('levels', 'assets/levels.png');

        //Cosas que usa el Menú Principal
        this.load.atlas('animintro', 'assets/Anim_Intro.png', 'assets/Anim_Intro.json'); //nombre que le damos, donde está el json, nombre de la carpeta
        this.load.atlas('animapertura', 'assets/Anim_Apertura.png', 'assets/Anim_Apertura.json');
        this.load.atlas('animboton', 'assets/Anim_Boton.png', 'assets/Anim_Boton.json');
        this.load.image('fondo', 'assets/white-background-2.jpg');
        this.load.image('controles', 'assets/Controles.png');
        this.load.bitmapFont('NierFont', 'assets/font.png', 'assets/font.fnt');
        this.load.bitmapFont('NierFontBlack', 'assets/font2.png', 'assets/font2.fnt');
        this.load.image('logo', "assets/logo.png");


        //Cosas que usa el Selector de niveles
        this.load.image("Juego", "assets/juego.png");
        this.load.image("Nivel1", "assets/Nivel1.png");
        this.load.image("Nivel2", "assets/Nivel2.png");
        this.load.image("Nivel3", "assets/Nivel3.png");
        this.load.image("Nivel4", "assets/Nivel4.png");
        this.load.image("Nivel5", "assets/Nivel5.png");
        this.load.image("NivelInfinito", "assets/Infinitus.png");
        this.load.image("Tutorial", "assets/Tutorial.png");
        this.load.image('TutorialLevels', "assets/TutorialLevels.png");

        //Cosas que usa scene_Play
        this.load.image("lunaran", "assets/nave.png");
        this.load.image("lunaran2", "assets/nave2.png");
        this.load.image("bala", "assets/bala.png");
        this.load.image("balaEnemigo", "assets/balaEnemigo.png");
        this.load.image("enemigo", "assets/enemigoBasico.png");
        this.load.image("laser", "assets/laser.png");
        this.load.image("barrera", "assets/barrera.png");
        this.load.image("corazon", "assets/corazon.png");
        this.load.image("fondoNegro", "assets/backgroundSpace.png");
        this.load.image('iconPausa', "assets/icon_pausa.png");
        this.load.image('enemigoAncho', "assets/enemigoAncho.png");
        this.load.image('enemigoRebote', "assets/EnemigoRebote.png");

        //Cosas que usa EscenaPausa
        this.load.image("ImagenPausa", "assets/Interfaz_Pausa.jpg");
        this.load.image("sfx", "assets/sfx.png");
        this.load.image("quit", "assets/quit.png");
        this.load.image("yes", "assets/yes.png");
        this.load.image("no", "assets/no.png");

        //Cosas que usa EscenaSonido
        this.load.image("musica", "assets/musica.png");
        this.load.image("sonidos", "assets/sonidos.png");
        this.load.image("uno", "assets/1.png");
        this.load.image("dos", "assets/2.png");
        this.load.image("tres", "assets/3.png");
        this.load.image("cuatro", "assets/4.png");
        this.load.image("cinco", "assets/5.png");
        this.load.image("seis", "assets/6.png");
        this.load.image("siete", "assets/7.png");
        this.load.image("ocho", "assets/8.png");
        this.load.image("nueve", "assets/9.png");
        this.load.image("diez", "assets/10.png");
        this.load.image("mute", "assets/muted.png");
        this.load.image("back", "assets/icon_back.png");
        this.load.audio("musicaFondo", "assets/musicaMenu.ogg");
        this.load.audio("musicaInGame", "assets/inGameMusica.ogg");
        this.load.audio("click1", "assets/Click1.ogg");
        this.load.audio("click2", "assets/Click2.ogg");

        //Cosas que usa EscenaFinal
        this.load.image("home", "assets/icono_reinicio.png");

        this.load.audio('muerteEnemigo', 'assets/muerteEnemigo.ogg');

        this.loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        })
        this.load.on("progress", (percent) => {
            this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'logo').setScale(0.7);
            this.loadingBar.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * percent, 50);
        })

    }

}

export default Bootloader;