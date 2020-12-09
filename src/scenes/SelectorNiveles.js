export default class SelectorNiveles extends Phaser.Scene {
    constructor() {
        super({ key: 'SelectorNiveles' });
    }

    create(data) {

        this.musicaInGame = data.escena.musicaInGame;
        this.musica = data.escena.musica;
        this.click1Sound = data.escena.click1Sound;
        this.click2Sound = data.escena.click2Sound;
        this.sonidos = data.escena.sonidos;

        var that = this;
        this.nombreEscena = 'SelectorNiveles';


        this.image = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoNegro');

        this.nivel1 = this.add.image(this.sys.game.config.width / 2 - 100, this.sys.game.config.height / 2 - 100, 'Nivel1').setInteractive({ useHandCursor: true }).setScale(0.6)
            .on("pointerover", () => {
                this.nivel1.setScale(0.65);
            })
            .on("pointerout", () => {
                this.nivel1.setScale(0.6);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
                this.scene.start("EscenaPausa", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos, escena: 1 });
                this.scene.start("lvl_1", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
            });
        this.nivel2 = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 100, 'Nivel2').setInteractive({ useHandCursor: true }).setScale(0.6)
            .on("pointerover", () => {
                this.nivel2.setScale(0.65);
            })
            .on("pointerout", () => {
                this.nivel2.setScale(0.6);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
                this.scene.start("EscenaPausa", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos, escena: 2 });
                this.scene.start("lvl_2", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
            });
        this.nivel3 = this.add.image(this.sys.game.config.width / 2 + 100, this.sys.game.config.height / 2 - 100, 'Nivel3').setInteractive({ useHandCursor: true }).setScale(0.6)
            .on("pointerover", () => {
                this.nivel3.setScale(0.65);
            })
            .on("pointerout", () => {
                this.nivel3.setScale(0.6);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
                this.scene.start("EscenaPausa", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos, escena: 3 });
                this.scene.start("lvl_3", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
            });
        this.nivel4 = this.add.image(this.sys.game.config.width / 2 - 100, this.sys.game.config.height / 2 - 50, 'Nivel4').setInteractive({ useHandCursor: true }).setScale(0.6)
            .on("pointerover", () => {
                this.nivel4.setScale(0.65);
            })
            .on("pointerout", () => {
                this.nivel4.setScale(0.6);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
                this.scene.start("EscenaPausa", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos, escena: 4 });
                this.scene.start("lvl_4", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
            });
        this.nivel5 = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 50, 'Nivel5').setInteractive({ useHandCursor: true }).setScale(0.6)
            .on("pointerover", () => {
                this.nivel5.setScale(0.65);
            })
            .on("pointerout", () => {
                this.nivel5.setScale(0.6);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
                this.scene.start("EscenaPausa", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos, escena: 5 });
                this.scene.start("lvl_5", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
            });
        this.nivelInf = this.add.image(this.sys.game.config.width / 2 + 100, this.sys.game.config.height / 2 - 50, 'NivelInfinito').setInteractive({ useHandCursor: true }).setScale(0.6)
            .on("pointerover", () => {
                this.nivelInf.setScale(0.65);

            })
            .on("pointerout", () => {
                this.nivelInf.setScale(0.6);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos });
                this.scene.start("EscenaPausa", { musica: that.musica, musicaInGame: that.musicaInGame, click1: that.click1Sound, click2: that.click2Sound, sonidos: that.sonidos, escena: 6 });
                this.scene.start('scene_Play', { escena: this });
            });
        this.tutorial = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'Tutorial').setInteractive({ useHandCursor: true }).setScale(0.6)
            .on("pointerover", () => {
                this.tutorial.setScale(0.65);
            })
            .on("pointerout", () => {
                this.tutorial.setScale(0.6);
            })
            .on("pointerdown", () => {
                this.controles = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'controles').setInteractive({ useHandCursor: true })
                .on("pointerdown",()=>{
                    that.controles.destroy();
                    this.imagenNiveles = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'TutorialLevels').setInteractive({ useHandCursor: true })
                    .on("pointerdown",()=>{
                        this.imagenNiveles.destroy();
                    })
                })
            });
    }
}