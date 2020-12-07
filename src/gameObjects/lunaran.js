class Lunaran extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, type){
        super(scene, x, y, type);
        scene.add.existing(this);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds(true);

    }
    die(){
        this.setActive(false);
        this.setVisible(false);
        this.body.enable = false;
    }
}

export default Lunaran;