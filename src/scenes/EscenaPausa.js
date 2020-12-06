export default class EscenaPausa extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaPausa' });
    }

    create() {
        this.cursor_ESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        this.render = false;
        this.pausa = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoNegro').setInteractive();
    }

    update() {
        if (this.cursor_ESC.isDown) {

            this.render = true;
        }

        if (this.render) {
            this.render = false;
            this.scene.switch('scene_Play');
        }
    }
}

