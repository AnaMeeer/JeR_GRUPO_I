export default class EscenaPausa extends Phaser.Scene {
    constructor() {
        super({key: 'EscenaPausa'});
    }

    create(data) {
        var that = this;
        this.musica = data.musica;
        this.musicaInGame = data.musicaInGame;
        this.click1Sound = data.click1;
        this.click2Sound = data.click2;

        this.escenaSeleccionada = data.escena;


        this.pausa = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'ImagenPausa');
        this.quit = this.add.image(this.sys.game.config.width / 2 + 1, this.sys.game.config.height / 2 + 9, 'quit');
        this.sfx = this.add.image(this.sys.game.config.width / 2 - 80, this.sys.game.config.height / 2 - 72.5, 'sfx').setInteractive({useHandCursor: true}).on('pointerup', function () {
            that.click2Sound.play();
            that.scene.sleep();
            that.scene.wake('EscenaSonido');
        });

        this.yes = this.add.image(this.sys.game.config.width / 2 - 79.5, this.sys.game.config.height / 2 + 87.5, 'yes').setInteractive({useHandCursor: true}).on('pointerup', function () {
            that.musica.stop();
            that.musicaInGame.stop();
            that.click2Sound.play();
            that.scene.stop('scene_Play');
            that.scene.stop('lvl_1');
            that.scene.stop('lvl_2');
            that.scene.stop('lvl_3');
            that.scene.stop('lvl_4');
            that.scene.stop('lvl_5');
            that.scene.stop('SelectorNiveles');
            that.scene.stop('Bootloader');
            that.scene.stop('MenuPrincipal');
            that.scene.stop('PantallaFinal');
            that.scene.stop('EscenaSonido');

            that.scene.start('Bootloader');
            that.scene.start('MenuPrincipal');
            // ChatAlTerminar();

        });


        this.no = this.add.image(this.sys.game.config.width / 2 + 82.5, this.sys.game.config.height / 2 + 87, 'no').setInteractive({useHandCursor: true}).on('pointerup', function () {
            switch (that.escenaSeleccionada) {
                case 1:
                    that.scene.wake('lvl_1');
                    that.click2Sound.play();
                    break;
                case 2:
                    that.scene.wake('lvl_2');
                    that.click2Sound.play();
                    break;
                case 3:
                    that.scene.wake('lvl_3');
                    that.click2Sound.play();
                    break;
                case 4:
                    that.scene.wake('lvl_4');
                    that.click2Sound.play();
                    break;
                case 5:
                    that.scene.wake('lvl_5');
                    that.click2Sound.play();
                    break;
                case 6:
                    that.scene.wake('scene_Play');
                    that.click2Sound.play();
                    break;

                //ELIMINAR CUANDO SE TERMINEN DE HACER LOS CAMBIOS
                case 7:
                    that.scene.wake('scene_PlayBORRAR');
                    that.click2Sound.play();
                    break;
            }


        });


        //Boton NO
        this.no.on("pointerover", () => {

            this.no.setScale(1.1, 1.1);
            this.no.setAlpha(0.7);
        })


        this.no.on("pointerout", () => {
            this.no.setScale(1, 1);
        })


        //Boton YES
        this.yes.on("pointerover", () => {

            this.yes.setScale(1.1, 1.1);
            this.yes.setAlpha(0.7);
        })
        this.yes.on("pointerout", () => {
            this.yes.setScale(1, 1);
        })

        //Boton SFX
        this.sfx.on("pointerover", () => {

            this.sfx.setScale(1.1, 1.1);
            this.sfx.setAlpha(0.7);
        })
        this.sfx.on("pointerout", () => {
            this.sfx.setScale(1, 1);
        })


    }

}