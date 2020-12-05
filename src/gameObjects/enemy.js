
class Enemies extends Phaser.Physics.Arcade.Group{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 50,
            key: 'enemy',
            active: false,
            visible: false,
            classType: Enemy
        });
    }
    spawnEnemy (x, y)
    {
        let enemy = this.getFirstDead(true);

        if (enemy)
        {
            enemy.spawn(x,y);
    
        }
    }
    killEnemy(){
        let enemy = this.getFirstAlive();

        if (enemy){
            enemy.die();
        }
    }
}

class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'enemigo');
        //scene.add.existing(this);
        //scene.physics.world.enable(this);
        //this.body.immovable = true;
    }

    spawn(x,y){
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);

        //this.setVelocityX(100);
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
        this.destroy();
    }
}
export default Enemies;