class Barra extends Phaser.Physics.Arcade.Group{

    constructor (scene, color) {

        super (scene.physics.world, scene);

        this.bar = new Phaser.GameObjects.Graphics(scene);

        this.value = 100;
        this.p = 124/100;   //para saber que porcentaje de la barra pintar
        this.setVisible(false);
        this.setActive(false);
        scene.add.existing(this.bar);
        this.color = color; //cada barra tiene un color
    }

    createBar (x, y, init) {
        this.x = x;
        this.y = y;
        this.draw();
        this.Init(init);
        this.setVisible(true);
        this.setActive(true);
    }

    Init (amount) {
            this.value = amount;

            if (this.value < 0) {
                this.value = 0;
            }

            this.draw();

        return (this.value === 0);
    }

    decrease (rate) {
            this.value -= rate;

            if (this.value < 0) {
                this.value = 0;
            }

            this.draw();

        return (this.value === 0);
    }

    increasePowerUp (amount) {
        this.value += amount;

        if (this.value > 100) {
            this.value = 100;
        }

        this.draw();

        return (this.value === 100);
    }

    increaseDash() {
        for (var j = 0; j < 1; j++) {
            this.value += 0.15;

            if (this.value > 100) {
                this.value = 100;
            }

            this.draw();
        }

        return (this.value === 100);
    }

    draw () {
        this.bar.clear();

        //  Borde
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x, this.y, 130, 12);

        //  Health
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 2, this.y + 2, 126, 8); //Fondo blanco de la barra de vida

        if (this.value >= 100) //pintar de verde
        {
            this.bar.fillStyle(0x39ff14);
            this.bar.fillRect(this.x + 2, this.y + 2, 126, 8);
        }
        else    //pintar de cada color
        {
            this.bar.fillStyle(this.color);
        }

        var d = Math.floor(this.p * this.value);

        this.bar.fillRect(this.x + 2, this.y + 2, d, 8);
    }

}

export default Barra;