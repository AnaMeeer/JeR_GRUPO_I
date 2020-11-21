class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'enemigo');
        scene.add.existing(this);
        scene.physics.world.enable(this);
    }
    die(){
        this.setActive(false);
        this.setVisible(false);
    }
}
export default Enemy;