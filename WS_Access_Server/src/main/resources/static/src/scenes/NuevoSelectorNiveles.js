export default class NuevoSelectorNiveles extends Phaser.Scene {
    constructor() {
        super({ key: "NuevoSelectorNiveles" });

    }

    create(data) {
        this.musicaInGame = data.escena.musicaInGame;
        this.musica = data.escena.musica;
        this.click1Sound = data.escena.click1Sound;
        this.click2Sound = data.escena.click2Sound;
        this.sonidos = data.escena.sonidos;

        var that = this;
        this.nombreEscena = 'SelectorNiveles';

        this.image = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'SelectorNivelesFondo');

        this.nivel1 = this.add.image(this.sys.game.config.width / 2 - 325, this.sys.game.config.height / 2 - 50, 'Level1').setInteractive({ useHandCursor: true }).setScale(1.01)
            .on("pointerover", () => {
                this.nivel1.setScale(1.05);
            })
            .on("pointerout", () => {
                this.nivel1.setScale(1.01);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos
                });
                this.scene.start("EscenaPausa", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    escena: 1
                });
                this.scene.start("lvl_1", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    player: data.player
                });
            });

        this.nivel2 = this.add.image(this.sys.game.config.width / 2 - 163, this.sys.game.config.height / 2 - 145, 'Level2').setInteractive({ useHandCursor: true }).setScale(1.01)
            .on("pointerover", () => {
                this.nivel2.setScale(1.05);
            })
            .on("pointerout", () => {
                this.nivel2.setScale(1.01);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos
                });
                this.scene.start("EscenaPausa", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    escena: 2
                });
                this.scene.start("lvl_2", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    player: data.player
                });
            });
        this.nivel3 = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 52, 'Level3').setInteractive({ useHandCursor: true }).setScale(1.01)
            .on("pointerover", () => {
                this.nivel3.setScale(1.05);
            })
            .on("pointerout", () => {
                this.nivel3.setScale(1.01);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos
                });
                this.scene.start("EscenaPausa", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    escena: 3
                });
                this.scene.start("lvl_3", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    player: data.player
                });
            });

        this.nivel4 = this.add.image(this.sys.game.config.width / 2 + 162, this.sys.game.config.height / 2 - 145, 'Level4').setInteractive({ useHandCursor: true }).setScale(1.01)
            .on("pointerover", () => {
                this.nivel4.setScale(1.05);
            })
            .on("pointerout", () => {
                this.nivel4.setScale(1.01);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos
                });
                this.scene.start("EscenaPausa", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    escena: 4
                });
                this.scene.start("lvl_4", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    player: data.player
                });
            });

        this.nivel5 = this.add.image(this.sys.game.config.width / 2 + 325, this.sys.game.config.height / 2 - 50, 'Level5').setInteractive({ useHandCursor: true }).setScale(1.01)
            .on("pointerover", () => {
                this.nivel5.setScale(1.05);
            })
            .on("pointerout", () => {
                this.nivel5.setScale(1.01);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos
                });
                this.scene.start("EscenaPausa", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    escena: 5
                });
                this.scene.start("lvl_5", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    player: data.player
                });
            });

        this.Infinitus = this.add.image(this.sys.game.config.width / 2 - 163, this.sys.game.config.height / 2 + 125, 'Infinitus').setInteractive({ useHandCursor: true }).setScale(1.01)
            .on("pointerover", () => {
                this.Infinitus.setScale(1.05);
            })
            .on("pointerout", () => {
                this.Infinitus.setScale(1.01);
            })
            .on("pointerdown", () => {
                this.musica.stop();
                this.scene.start("EscenaSonido", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos
                });
                this.scene.start("EscenaPausa", {
                    musica: that.musica,
                    musicaInGame: that.musicaInGame,
                    click1: that.click1Sound,
                    click2: that.click2Sound,
                    sonidos: that.sonidos,
                    escena: 6
                });
                this.scene.start('Infinitus', { escena: this, player: data.player });
            });

        this.Online = this.add.image(this.sys.game.config.width / 2 + 162, this.sys.game.config.height / 2 + 120, 'Online').setInteractive({ useHandCursor: true }).setScale(1.01)
            .on("pointerover", () => {
                this.Online.setScale(1.05);
            })
            .on("pointerout", () => {
                this.Online.setScale(1.01);
            })
            .on("pointerdown", () => {

                this.scene.start('SeleccionJugador', { escena: this, player: data.player });
            });
    }
}