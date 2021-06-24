export default class SeleccionJugador extends Phaser.Scene {
    constructor() {
        super({ key: "SeleccionJugador" });

    }

    create(data){
        this.musicaInGame = data.escena.musicaInGame;
        this.musica = data.escena.musica;
        this.click1Sound = data.escena.click1Sound;
        this.click2Sound = data.escena.click2Sound;
        this.sonidos = data.escena.sonidos;

        var that = this;
        var escenaAPasar = data.escena;
        var player = data.player;

        this.image = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'SelectorNivelesFondo');

        this.Jugador1 = this.add.image(this.sys.game.config.width / 2-205, this.sys.game.config.height / 2 -22, 'Player1').setInteractive({useHandCursor: true}).setScale(1.01)
            .on("pointerover", () => {
                this.Jugador1.setScale(1.05);
            })
            .on("pointerout", () => {
                this.Jugador1.setScale(1.01);
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
                    escena: 7
                });
                this.scene.start('scene_Play', {escena: escenaAPasar, player: player});
            });

            this.Jugador2 = this.add.image(this.sys.game.config.width / 2+220, this.sys.game.config.height / 2 -22, 'Player2').setInteractive({useHandCursor: true}).setScale(1.01)
            .on("pointerover", () => {
                this.Jugador2.setScale(1.05);
            })
            .on("pointerout", () => {
                this.Jugador2.setScale(1.01);
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
                    escena: 8
                });
                this.scene.start('scene_PlayBORRAR', {escena: escenaAPasar, player: player});
            });
    }
}