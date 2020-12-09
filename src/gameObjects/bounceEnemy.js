import HealthBar from '../gameObjects/HealthBar.js';

class BounceEnemies extends Phaser.Physics.Arcade.Group{
    constructor (scene)
    {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 50,
            key: 'enemy',
            active: false,
            visible: false,
            enable: false,
            classType: BounceEnemy
        });
    }
    spawnEnemy (x, y, xDir, yDir)
    {
        let enemy = this.getFirstDead(true);

        if (enemy)
        {
            enemy.spawn(x,y,xDir,yDir);
    
        }
    }
}

class BounceEnemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'enemigoRebote');
        this.hp = new HealthBar(this.scene);
    }

    spawn(x,y, xDir, yDir){
        
        this.body.reset(x, y);
        this.setCollideWorldBounds(true);
        this.setBounce(1);
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

        if (this.x <= -150 || this.x >= 1050 || this.y < -60 || this.y > 500)
        {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
        }
    }

    damageEnemy(amount){
        if (this.hp.decrease(amount)) {
            this.destroy();
            return true;
        }
        return false;
    }
    die(){
        this.destroy();
    }
}
export default BounceEnemies;