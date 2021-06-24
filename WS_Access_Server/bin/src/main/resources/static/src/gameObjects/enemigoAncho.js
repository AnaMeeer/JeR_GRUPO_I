
class WideEnemies extends Phaser.Physics.Arcade.Group{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 2,
            key: 'WideEnemy',
            active: false,
            visible: false,
            enable: false,
            classType: WideEnemy
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
}

class WideEnemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'enemigoAncho');
    }

    spawn(x,y){
        
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.body.enable = true;

        this.setVelocityY(200);
        this.body.immovable = true;
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.y > 500)
        {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
        }
    }
}
export default WideEnemies;