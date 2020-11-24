import Lunaran from '../gameObjects/lunaran.js';
import Balas from '../gameObjects/balas.js';
import Enemies from '../gameObjects/enemy.js';
import Lasers from '../gameObjects/laser.js';


class scene_Play extends Phaser.Scene {
    constructor() {
        super({ key: "scene_Play" });
    }


    create() {

        let center_width = this.sys.game.config.width / 2;
        //Lunara
        this.player1 = new Lunaran(this, center_width - 10, 350, "lunaran");

        this.player2 = new Lunaran(this, center_width + 10, 350, "lunaran2");

        //Controles
        //Jugador 1
        this.cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.cursor_d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_e = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.cursor_q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        //Jugador 2
        this.cursor_i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.cursor_j = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.cursor_k = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.cursor_l = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.cursor_o = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        this.cursor_u = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);

        //Balas
        this.bullets = new Balas(this);

        this.input.keyboard.on("keydown_SPACE", () => {
            this.fireBullet(this.player1.x, this.player1.y);
        })
        this.fireRate = 4000;
        this.payerBulletYSpeed = -300;

        //PowerUps: Láser desintegrador.
        var duracion = 5;
        this.lasers = new Lasers(this);
        this.cursor_q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.bulletSpeed = -1000;

        //Enemigos
        this.enemies = new Enemies(this);
        this.enemies.spawnEnemy(100, 100);

        //Colisiones 
        var that = this;
        this.physics.add.collider(this.bullets, this.enemies, killEnemy);
        //this.physics.add.overlap(this.bullets, this.enemy, killEnemy(this.enemy), null, this);

        //  this.variable = this.time.addEvent({
        //     delay: 500, callback: () => {

        //     }, callback: this
        // });


        //window.setInterval(this.bullets.fireBullet(), 1000, this.player1.x, this.player1.y);

        //shoot(this.time, this.bullets, this.player1);

        // Phaser.Game.timer.events.loop(Phaser.Timer.SECOND * 0.5, shoot, this);
        //this.secuenciaDisparo = new Phaser.time.events.loop(500, shoot(this.bullets, this.player1), this);
        // const config2 = {
        //     delay: 500,
        //     loop: true,
        //     callback: shoot(this.bullets, this.player1),
        //     callbackScope: this,
        //     startAt = 0,
        //     paused: false,
        //     hasDispatched = true
        // };
        //Phaser.Time.TimerEvent(500, shoot(this.bullets, this.player1), this);
        
    }

    update(time, delta) {
        //Controles
        //shoot(this.time, this.bullets, this.player1);
        //this.bullets.fireBullet(this.player1.x, this.player1.y);
         if(time > this.fireRate){
             this.bullets.fireBullet(this.player1.x, this.player1.y, 0, this.payerBulletYSpeed);    
             this.fireRate += 100;
         }

        //PowerUp: Laser desintegrador        
        if (this.cursor_q.isDown) {
                this.lasers.fireLaser(this.player1.x, this.player1.y, 0, this.bulletSpeed);   
        }

        //Player 1
        if (this.cursor_a.isDown) {
            this.player1.body.setVelocityX(-200);
        }
        else if (this.cursor_d.isDown) {
            this.player1.body.setVelocityX(200);
        }
        else if (this.cursor_w.isDown) {
            this.player1.body.setVelocityY(-200);
        }
        else if (this.cursor_s.isDown) {
            this.player1.body.setVelocityY(200);
        }
        else {
            this.player1.body.setVelocity(0);
        }

        //Player 2
        if (this.cursor_k.isDown) {
            this.player2.body.setVelocityY(200);
        }
        else if (this.cursor_i.isDown) {
            this.player2.body.setVelocityY(-200);
        }
        else if (this.cursor_l.isDown) {
            this.player2.body.setVelocityX(200);
        }
        else if (this.cursor_j.isDown) {
            this.player2.body.setVelocityX(-200);
        }
        else {
            this.player2.body.setVelocity(0);
        }
    }
}

function killEnemy(bullet, enemy){
    bullet.die();
    enemy.die();
}


export default scene_Play;