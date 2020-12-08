export default class PantallaFinal extends Phaser.Scene {
    constructor() {
        super({ key: "PantallaFinal" });
    }

    create(data) {
        this.fondo = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondo');
        this.puntos = data.score;

        if (this.puntos === 100) {
            this.texto = this.add.bitmapText(this.fondo.x - 230, this.fondo.y - 20, 'NierFontBlack', "Felicidades, ganaste. Pulsa el boton para reiniciar", 20);
        }
        else {
            this.texto = this.add.bitmapText(this.fondo.x - 280, this.fondo.y - 20, 'NierFontBlack', "Has perdido, vuelve a intentarlo. Pulsa el boton para reiniciar", 20);
        }

        this.icono = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 50, 'home').setInteractive({ useHandCursor: true }).setScale(0.15)
            .on("pointerover", () => {
                this.icono.setScale(0.16);
            })
            .on("pointerout", () => {
                this.icono.setScale(0.15);
            })
            .on("pointerdown", () => {
                this.scene.start('Bootloader');
                this.scene.start('MenuPrincipal');

            });

    }
}