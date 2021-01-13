export default class PantallaFinal extends Phaser.Scene {
    constructor() {
        super({ key: "PantallaFinal" });
    }

    create(data) {
        this.fondo = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondo');
        this.puntos = data.score;
        this.victoriaPts = data.condition;
        this.player = data.player;
        if(this.player.highScore < this.puntos){
            this.player.highScore = this.puntos;
            updateUser(this.player);
        }

        if (this.puntos === this.victoriaPts) {
            this.texto = this.add.bitmapText(this.fondo.x - 250, this.fondo.y - 20, 'NierFontBlack', "Congratulations, You won. Press the button to try again.", 20);
            if (this.puntos > 0) {
                this.texto = this.add.bitmapText(this.fondo.x - 250, this.fondo.y - 30, 'NierFontBlack', "Your Score: " + this.puntos, 20);
            }
        }
        else {
            this.texto = this.add.bitmapText(this.fondo.x - 180, this.fondo.y - 20, 'NierFontBlack', "You lost. Press the button to try again.", 20);
            if (this.puntos > 0) {
                this.texto = this.add.bitmapText(this.fondo.x - 80, this.fondo.y - 50, 'NierFontBlack', "Your Score: " + this.puntos, 20 );
                this.texto = this.add.bitmapText(this.fondo.x - 80, this.fondo.y - 80, 'NierFontBlack', "Your HighScore: " + this.player.highScore, 20);
            }
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
                // ChatAlTerminar();
            });

    }
}

function updateUser(user){
    var newUser = {
        name: user.name,
        password: user.password,
        connected: user.connected,
        highScore: user.highScore
    }
    $.ajax({
        method: 'PUT',
        url: window.location.href + "/users/" + user.id,
        data: JSON.stringify(newUser),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data, textStatus) {
        console.log('PUT: ' + textStatus);
        console.log("De locos");
    })
}