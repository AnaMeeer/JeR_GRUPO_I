export default class EscenaLobby extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaLobby' });
    }

    create(){
        this.fondo = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoNegro');
    }
}