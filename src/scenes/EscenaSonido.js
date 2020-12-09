export default class EscenaSonido extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaSonido' });
    }


    // 
    create(data) {
        var that = this;
        this.click1Sound = data.click1Sound;
        this.click2Sound = data.click2Sound;
        this.musicaClickada = false;
        this.sonidoClickado = false;

        this.musica = data.musica;
        this.musicaInGame = data.musicaInGame;
        this.click1Sound = data.click1;
        this.click2Sound = data.click2;
        this.sonidos = data.sonidos;

        console.log(this.musicaClickada);
        this.fondo = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondo');
        this.iconMusica = this.add.image(this.sys.game.config.width / 2 - 100, this.sys.game.config.height / 2, 'musica').setInteractive({ useHandCursor: true }).setScale(0.10)
            .on("pointerover", () => {
                this.iconMusica.setScale(0.11);


            })
            .on("pointerout", () => {
                this.iconMusica.setScale(0.10);

            })
            .on("pointerdown", () => {
                that.click1Sound.play();
                that.musicaClickada = true;
                that.sonidoClickado = false;
                this.iconMusica.setAlpha(1);
                that.iconSonidos.setAlpha(0.3);

            });

        this.iconSonidos = this.add.image(this.sys.game.config.width / 2 + 100, this.sys.game.config.height / 2, 'sonidos').setInteractive({ useHandCursor: true }).setScale(0.15)
            .on("pointerover", () => {
                this.iconSonidos.setScale(0.16);
            })
            .on("pointerout", () => {
                this.iconSonidos.setScale(0.15);
            })
            .on("pointerdown", () => {
                that.click1Sound.play();
                that.musicaClickada = false;
                that.sonidoClickado = true;
                that.iconMusica.setAlpha(0.3);
                this.iconSonidos.setAlpha(1);

            });


        this.uno = this.add.image(this.sys.game.config.width / 2 - 200, this.sys.game.config.height / 2 + 100, 'uno').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.uno.setScale(0.5);
            })
            .on("pointerout", () => {
                this.uno.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.1);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.1);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.click1Sound.setVolume(0.1);
                    that.click2Sound.setVolume(0.1);
                    that.sonidos.setVolume(0.1);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.dos = this.add.image(this.sys.game.config.width / 2 - 150, this.sys.game.config.height / 2 + 100, 'dos').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.dos.setScale(0.5);
            })
            .on("pointerout", () => {
                this.dos.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.2);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.2);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.2);
                    that.click1Sound.setVolume(0.2);
                    that.click2Sound.setVolume(0.2);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.tres = this.add.image(this.sys.game.config.width / 2 - 100, this.sys.game.config.height / 2 + 100, 'tres').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.tres.setScale(0.5);
            })
            .on("pointerout", () => {
                this.tres.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.3);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.3);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.3);
                    that.click1Sound.setVolume(0.3);
                    that.click2Sound.setVolume(0.3);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.cuatro = this.add.image(this.sys.game.config.width / 2 - 50, this.sys.game.config.height / 2 + 100, 'cuatro').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.cuatro.setScale(0.5);
            })
            .on("pointerout", () => {
                this.cuatro.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.4);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.4);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.4);
                    that.click1Sound.setVolume(0.4);
                    that.click2Sound.setVolume(0.4);
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                    that.sonidoClickado = false;
                }
            });

        this.cinco = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2 + 100, 'cinco').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.cinco.setScale(0.5);
            })
            .on("pointerout", () => {
                this.cinco.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.5);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.5);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.5);
                    that.click1Sound.setVolume(0.5);
                    that.click2Sound.setVolume(0.5);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.seis = this.add.image(this.sys.game.config.width / 2 + 50, this.sys.game.config.height / 2 + 100, 'seis').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.seis.setScale(0.5);
            })
            .on("pointerout", () => {
                this.seis.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.6);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.6);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.6);
                    that.click1Sound.setVolume(0.6);
                    that.click2Sound.setVolume(0.6);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.siete = this.add.image(this.sys.game.config.width / 2 + 100, this.sys.game.config.height / 2 + 100, 'siete').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.siete.setScale(0.5);
            })
            .on("pointerout", () => {
                this.siete.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.7);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.7);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido 
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.7);
                    that.click1Sound.setVolume(0.7);
                    that.click2Sound.setVolume(0.7);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.ocho = this.add.image(this.sys.game.config.width / 2 + 150, this.sys.game.config.height / 2 + 100, 'ocho').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.ocho.setScale(0.5);
            })
            .on("pointerout", () => {
                this.ocho.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.8);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.8);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.8);
                    that.click1Sound.setVolume(0.8);
                    that.click2Sound.setVolume(0.8);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.nueve = this.add.image(this.sys.game.config.width / 2 + 200, this.sys.game.config.height / 2 + 100, 'nueve').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.nueve.setScale(0.5);
            })
            .on("pointerout", () => {
                this.nueve.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(0.9);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(0.9);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(0.9);
                    that.click1Sound.setVolume(0.9);
                    that.click2Sound.setVolume(0.9);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.diez = this.add.image(this.sys.game.config.width / 2 + 250, this.sys.game.config.height / 2 + 100, 'diez').setInteractive({ useHandCursor: true }).setScale(0.4)
            .on("pointerover", () => {
                this.diez.setScale(0.5);
            })
            .on("pointerout", () => {
                this.diez.setScale(0.4);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(false);
                    that.musica.setVolume(1);
                    that.musicaInGame.setMute(false);
                    that.musicaInGame.setVolume(1);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(false);
                    that.click1Sound.setMute(false);
                    that.click2Sound.setMute(false);
                    that.sonidos.setVolume(1);
                    that.click1Sound.setVolume(1);
                    that.click2Sound.setVolume(1);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });

        this.iconMute = this.add.image(this.sys.game.config.width / 2 + 330, this.sys.game.config.height / 2 + 97, 'mute').setInteractive({ useHandCursor: true }).setScale(0.09)
            .on("pointerover", () => {
                this.iconMute.setScale(0.11);
            })
            .on("pointerout", () => {
                this.iconMute.setScale(0.09);
            })
            .on("pointerdown", () => {
                that.click2Sound.play();
                if (that.musicaClickada) {
                    that.musica.setMute(true);
                    that.musicaInGame.setMute(true);
                    that.musicaClickada = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
                else if (that.sonidoClickado) {
                    //el sonido
                    that.sonidos.setMute(true);
                    that.click1Sound.setMute(true);
                    that.click2Sound.setMute(true);
                    that.sonidoClickado = false;
                    that.iconMusica.setAlpha(1);
                    that.iconSonidos.setAlpha(1);
                }
            });
        this.back = this.add.image(this.sys.game.config.width / 2 - 300, this.sys.game.config.height / 2 - 200, 'back').setInteractive({ useHandCursor: true }).setScale(0.05)
            .on("pointerover", () => {
                this.back.setScale(0.06);
            })
            .on("pointerout", () => {
                this.back.setScale(0.05);
            })
            .on("pointerdown", () => {
                this.back.setScale(0.05);
                that.click2Sound.play();
                that.scene.wake('EscenaPausa');
                that.scene.sleep();
            });
    }
}