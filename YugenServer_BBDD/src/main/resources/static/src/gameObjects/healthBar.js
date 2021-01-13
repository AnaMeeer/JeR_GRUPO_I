class HealthBar extends Phaser.Physics.Arcade.Group{

    constructor (scene) {

        super (scene.physics.world, scene);

        this.health = new Phaser.GameObjects.Graphics(scene);

        this.value = 100;
        scene.add.existing(this.health);
    }

    decrease (amount) {
        this.value -= amount;

        if (this.value < 0) {
            this.value = 0;
        }

        return (this.value === 0);
    }    

}

export default HealthBar;