export default class StartTutorial extends Phaser.Scene {
    constructor() {
        super({ key: "StartTutorial" });

    }

    create(data) {
        var that = this;
        this.fondoEstatico = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 - 25, 'SelectorNivelesFondo');
        this.logo = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2-50, 'LogoJuego').setScale(0.7);
        this.botonStart = this.add.image(this.sys.game.config.width / 2 - 143, this.sys.game.config.height / 2 + 71, 'BotonStart').setInteractive({ useHandCursor: true }).setScale(0.7)
            .on("pointerover", () => {
                this.botonStart.setScale(0.75);

            })
            .on("pointerout", () => {
                this.botonStart.setScale(0.7);

            })
            
            .on("pointerdown", () => {
                    this.scene.start('EscenaLobby', { escena: data.escena});
                    OcultarTodo();
            });
        this.botonTutorial = this.add.image(this.sys.game.config.width / 2 + 143, this.sys.game.config.height / 2 + 71, 'BotonTutorial').setInteractive({ useHandCursor: true }).setScale(0.7)
        .on("pointerover", () => {
            this.botonTutorial.setScale(0.75);

        })
        .on("pointerout", () => {
            this.botonTutorial.setScale(0.7);

        })
        .on("pointerdown", () => {
            this.controles = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'controles').setInteractive({useHandCursor: true}).setScale(1.3)
            .on("pointerdown", () => {
                that.controles.destroy();
                this.imagenNiveles = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'TutorialLevels').setInteractive({useHandCursor: true}).setScale(1.3)
                    .on("pointerdown", () => {
                        this.imagenNiveles.destroy();
                    })
            })
        });
    }
}