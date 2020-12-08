
class Lasers extends Phaser.Physics.Arcade.Group{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 50,
            key: 'lasers',
            active: false,
            visible: false,
            classType: Laser
        });
    }

    fireLaser (x, y, xDir, yDir)
    {
        let laser = this.getFirstDead(false);

        if (laser)
        {
            laser.disparar(x,y,xDir,yDir);
    
        }
    }
}
class Laser extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'laser');
        // scene.add.existing(this);
        // scene.physics.world.enable(this);
    }

    disparar (x, y, xDir, yDir){
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.body.enable = true;

        this.setVelocityX(xDir);
        this.setVelocityY(yDir);
        this.body.immovable = true;
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.y <= -10)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }

    die(){
        this.setActive(false);
        this.setVisible(false);
    }
    
}
export default Lasers;