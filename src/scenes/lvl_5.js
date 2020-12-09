export default class lvl_5 extends Phaser.Scene {
    constructor() {
        super({ key: 'lvl_5' });
    }

    create(data) {
        this.click1Sound = data.click1;
        this.nombreEscena = 'lvl_5';
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoNegro').setScale(1.0);
        this.iconoPausa = this.add.image(900 - 30, 0 + 30, 'iconPausa').setInteractive({ useHandCursor: true });
        console.log(this.nombreEscena);

        this.iconoPausa.on('pointerdown', () => {
            this.click1Sound.play();
            this.scene.sleep();
        })
    }
    update() {
        console.log(this.nombreEscena);
    }
}