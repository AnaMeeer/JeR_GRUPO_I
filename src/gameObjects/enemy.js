
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
    spawnEnemy (x, y, xDir, yDir)
    {
        let enemy = this.getFirstDead(true);

        if (enemy)
        {
            enemy.spawn(x,y,xDir,yDir);
    
        }
    }
}

class Enemy extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'enemigo');
    }

    spawn(x,y, xDir, yDir){
        
        this.body.reset(x, y);
        this.setActive(true);
        this.setVisible(true);

        this.setVelocityX(xDir);
        this.setVelocityY(yDir);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        if (this.x <= -150 || this.x >= 950 || this.y < -60 || this.y > 500)
        {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
        }
    }

    die(){
        this.destroy();
    }
}
export default Enemies;