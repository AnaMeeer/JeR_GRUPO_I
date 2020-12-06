class Barreras extends Phaser.Physics.Arcade.Group{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 1,
            key: 'barrier',
            active: false,
            visible: false,
            classType: Barrera
        });
    }

    crearBarrera (x, y)
    {
        let barrera = this.getFirstDead(true);

        if (barrera)
        {
            barrera.createBarrier(x,y);
    
        }
    }
    killBarrier(){
        let barrera = this.getFirstAlive();

        if (barrera){
            barrera.die();
        }
    }
}
class Barrera extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'barrera');
        // scene.add.existing(this);
        // scene.physics.world.enable(this);
    }

    createBarrier (x, y){
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);

        //this.setVelocityX(xDir)
        //this.setVelocityY(yDir);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.x <= -10 || this.x >= 810)
        {
            this.setActive(false);
            this.setVisible(false);
        }
    }

    die(){
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
    }
    
}
export default Barreras;