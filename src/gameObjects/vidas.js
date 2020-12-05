var gameOver = false;

class Vidas extends Phaser.Physics.Arcade.Group{
    constructor (scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 3,
            key: 'corazon',
            active: false,
            visible: false,
            classType: Vida
        });
    }


    createHealthSistem (x, y) {
        var vida1 = this.getFirstDead(true);
        if (vida1) {
            vida1.createHearts(x, y);
        }

        var vida2 = this.getFirstDead(true);
        if (vida2) {
            vida2.createHearts(x + 40, y);
        }

        var vida3 = this.getFirstDead(true);       
        if (vida3) {
            vida3.createHearts(x + 80, y);
        }
    }

    damage (amount) {
        var vidaRestante = this.getFirstAlive();

        if (vidaRestante) {
            vidaRestante.decrease(amount);
        } else {
            gameOver = true;
        }
    }
    
}

class Vida extends Phaser.Physics.Arcade.Sprite {
    constructor (scene, x, y) {
        super(scene, x, y, "corazon");       
        this.value = 100;
    }

    createHearts (x, y) {
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);
    }

    decrease (amount) {
        this.value -= amount;

        if (this.value <= 0) {
            this.die();
        }
    }

    die(){
        this.setActive(false);
        this.setVisible(false);
    }
}

export default Vidas;