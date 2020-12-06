export default class MenuPrincipal extends Phaser.Scene {
    constructor() {
        super({ key: "MenuPrincipal" });
    }

    create() {
        //Renderizamos el fondo
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondo');
        
        //Renderizamos la primera imagen del SpriteSheet
        this.imagen = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'anim_intro', 'SpriteIntro_0001.png').setInteractive({ useHandCursor: true });

        //Variables que usaremos para controlar animaciones
        this.animable = true;
        this.seClicka = false;

        //establecemos la escala y seleccionamos los frames de la primera animación
        this.imagen.setScale(0.5, 0.5);
        var frameNames = this.anims.generateFrameNames('anim_intro', {
            start: 0,
            end: 7,
            prefix: 'SpriteIntro_',
            suffix: '.png',
            zeroPad: 4
        });

        //se inicia la primera animación
        this.anims.create({ key: 'anim', frames: frameNames, frameRate: 10, repeat: 0 });

        //función al pasar por encima de la primera animación
        this.imagen.on('pointerover', () => {
            if (this.animable === true) {
                this.imagen.anims.play('anim');
                this.animable = false;
            }
            //añado un timer de 1 segundos para dar tiempo a que termine la animación
            this.seClicka = this.time.addEvent({ delay: 700, callback: () => { this.seClicka = true }, callbackScope: this });
        });


        //función al clickar en la primera animación
        this.imagen.on('pointerdown', () => {
            if (this.seClicka == true) {
                //hacemos que se vuelva invisible la primera animación
                this.imagen.setVisible(false);
                

                //Iniciamos la segunda animación
                this.imagenApertura = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'anim_apertura', 'SpriteApertura_0001.png').setInteractive();
                this.imagenApertura.setScale(0.5, 0.5);
                var frameNames = this.anims.generateFrameNames('anim_apertura', {
                    start: 0,
                    end: 8,
                    prefix: 'SpriteApertura_',
                    suffix: '.png',
                    zeroPad: 4
                });

                //Se reproduce la segunda animación
                this.anims.create({ key: 'anim2', frames: frameNames, frameRate: 30, repeat: 0 });
                this.imagenApertura.play('anim2');

                //añado timer para que comience la tercera animación
                this.seAnimaBoton = this.time.addEvent({
                    delay: 250, callback: () => {
                        this.imagenBoton = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'anim_boton', 'AnimBoton_0001.png').setInteractive({ useHandCursor: true });
                        this.imagenBoton.setScale(1, 1);
                        var framesBoton = this.anims.generateFrameNames('anim_boton', {
                            start: 0,
                            end: 14,
                            prefix: 'AnimBoton_',
                            suffix: '.png',
                            zeroPad: 4
                        });

                        //Se reproduce la tercera animación
                        this.anims.create({ key: 'anim3', frames: framesBoton, frameRate: 25, repeat: 0 });
                        this.imagenBoton.play('anim3');
                        this.imagenBoton.on('pointerdown', () => {

                            //lo que ocurrirá al pulsar el botón
                            console.log("hola");
                            this.scene.start('scene_Play');
                            this.scene.start("EscenaPausa");

                        })
                    }, callbackScope: this
                });

            }

        });

    }
}



