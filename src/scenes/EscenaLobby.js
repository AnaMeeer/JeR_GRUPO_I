export default class EscenaLobby extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaLobby' });
    }

    create(data) {
        this.escena = data.escena;
        this.fondo = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoNegro');
        this.pasarAjugar = this.add.image(this.sys.game.config.width / 2 + 350, this.sys.game.config.height / 2 - 200, 'levels').setInteractive({ useHandCursor: true }).setScale(0.7)
            .on("pointerover", () => {
                this.pasarAjugar.setScale(0.75);


            })
            .on("pointerout", () => {
                this.pasarAjugar.setScale(0.7);

            })
            .on("pointerdown", () => {
                this.scene.start('SelectorNiveles', { escena: data.escena });
                OcultarTodo();
            });
    }
}