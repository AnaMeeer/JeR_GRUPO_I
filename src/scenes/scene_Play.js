import Lunaran from '../gameObjects/lunaran.js';
import Balas from '../gameObjects/balas.js';
import Enemies from '../gameObjects/enemy.js';
import Lasers from '../gameObjects/laser.js';
import Barreras from '../gameObjects/barrera.js';
import Vidas from '../gameObjects/vidas.js';

//variables
var numBarreras = 0;
var tiempoActual;
var amountDamageBullet = 1;
var amountDamageLaser = 50;
var amountDamageEnemy = 100;

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
        this.cursor_q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);//power up
        this.cursor_e = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);//dash

        //Jugador 2
        this.cursor_i = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.cursor_j = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.cursor_k = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.cursor_l = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        this.cursor_o = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);//dash
        this.cursor_u = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);//power up

        //Balas
        this.bullets = new Balas(this);

        this.input.keyboard.on("keydown_SPACE", () => {
            this.fireBullet(this.player1.x, this.player1.y);
        })
        this.fireRate = 4000;
        this.payerBulletYSpeed = -300;

        //PowerUps: Láser desintegrador.
        this.lasers = new Lasers(this);
        this.bulletSpeed = -1000;

        //Rezo desesperado.
        this.barreras = new Barreras(this);

        //Guanteletes Zzap.

        //Impulso de Hringhorni.

        //Enemigos
        this.enemies = new Enemies(this);
        this.enemyRate = 4000;

        //Vidas
        this.sistemaVida = new Vidas(this);
        this.sistemaVida.createHealthSistem(680, 465);
        this.input.keyboard.on("keydown_R", () => {     //para comprobar que funciona bien. Cambiarlo luego por una colision
            this.sistemaVida.damage(amountDamageEnemy);
        })

        //Colisiones 
        this.physics.add.overlap(this.bullets, this.enemies, bulletEnemy);  //colision con una bala
        this.physics.add.overlap(this.lasers, this.enemies, laserEnemy);    //colision con el laser

        this.timerSpawn = this.time.addEvent({ delay: 4000, callback: spawnerFunc , callbackScope: this, loop: true });


    }

    update(time, delta) {

        if (time > this.fireRate) {
            this.bullets.fireBullet(this.player1.x, this.player1.y, 0, this.payerBulletYSpeed);
            this.fireRate += 300;
        }

        // if (time > this.enemyRate) {
        //     var y = Phaser.Math.Between(-50, 300);
        //     var x;
        //     var xDir;
        //     var yDir;
        //     if (y < 0) {
        //         x = Phaser.Math.Between(200, 600);
        //         xDir = Phaser.Math.Between(-20, 20);
        //         yDir = 100;
        //         for (var i = 0; i < 5; i++) {
        //             this.enemies.spawnEnemy(x + (25 * i), y, xDir, yDir);
        //         }
        //     }
        //     else {
        //         if (y % 2) {
        //             x = -130
        //             xDir = 200
        //             yDir = Phaser.Math.Between(-20, 20);
        //             for (var i = 0; i < 3; i++) {
        //                 this.enemies.spawnEnemy(x + (40 * i), y, xDir, yDir);
        //             }
        //         }
        //         else{
        //             x = 930
        //             xDir = -200
        //             yDir = Phaser.Math.Between(-20, 20);
        //             for (var i = 0; i < 3; i++) {
        //                 this.enemies.spawnEnemy(x - (40 * i), y, xDir, yDir);
        //             }
        //         }
        //     }
        //     this.enemyRate += 4000;
        // }

        //CONTROLES

        //PowerUp: Laser desintegrador        
        if (this.cursor_q.isDown) {
            this.lasers.fireLaser(this.player1.x, this.player1.y, 0, this.bulletSpeed);
        }

        //PowerUp: Rezo desesperado
        if ((this.cursor_u.isDown) && (numBarreras < 1)) {
            this.barreras.crearBarrera(this.player1.x, (this.player1.y - 20));
            numBarreras += 1;
            tiempoActual = time;
        }
        if (time > (tiempoActual + 5000)) {
            this.barreras.killBarrier();
            numBarreras = 0;
        }

        //Player 1
        if (this.cursor_a.isDown) {
            this.player1.body.setVelocityX(-200);
            if (this.cursor_e.isDown) {
                this.player1.body.setVelocityX(-900);
            }
        }
        else if (this.cursor_d.isDown) {
            this.player1.body.setVelocityX(200);
            if (this.cursor_e.isDown) {
                this.player1.body.setVelocityX(900);
            }
        }
        else if (this.cursor_w.isDown) {
            this.player1.body.setVelocityY(-200);
            if (this.cursor_e.isDown) {
                this.player1.body.setVelocityY(-900);
            }
        }
        else if (this.cursor_s.isDown) {
            this.player1.body.setVelocityY(200);
            if (this.cursor_e.isDown) {
                this.player1.body.setVelocityY(900);
            }
        }
        else {
            this.player1.body.setVelocity(0);
        }

        //Player 2
        if (this.cursor_k.isDown) {
            this.player2.body.setVelocityY(200);
            if (this.cursor_o.isDown) {
                this.player2.body.setVelocityY(900);
            }
        }
        else if (this.cursor_i.isDown) {
            this.player2.body.setVelocityY(-200);
            if (this.cursor_o.isDown) {
                this.player2.body.setVelocityY(-900);
            }
        }
        else if (this.cursor_l.isDown) {
            this.player2.body.setVelocityX(200);
            if (this.cursor_o.isDown) {
                this.player2.body.setVelocityX(900);
            }
        }
        else if (this.cursor_j.isDown) {
            this.player2.body.setVelocityX(-200);
            if (this.cursor_o.isDown) {
                this.player2.body.setVelocityX(-900);
            }
        }
        else {
            this.player2.body.setVelocity(0);
        }

    }
}

//impacto de una bala contra un enemigo
function bulletEnemy(bullet, enemy) {
    bullet.die();
    enemy.die();
}
//impacto del laser contra un enemigo
function laserEnemy(laser, enemy) {
    enemy.die();
}

function spawnerFunc(){
    var y = Phaser.Math.Between(-50, 300);
    var x;
    var xDir;
    var yDir;
    if (y < 0) {
        x = Phaser.Math.Between(200, 600);
        xDir = Phaser.Math.Between(-20, 20);
        yDir = 100;
        for (var i = 0; i < 5; i++) {
            this.enemies.spawnEnemy(x + (25 * i), y, xDir, yDir);
        }
    }
    else {
        if (y % 2) {
            x = -130
            xDir = 200
            yDir = Phaser.Math.Between(-20, 20);
            for (var i = 0; i < 3; i++) {
                this.enemies.spawnEnemy(x + (40 * i), y, xDir, yDir);
            }
        }
        else{
            x = 930
            xDir = -200
            yDir = Phaser.Math.Between(-20, 20);
            for (var i = 0; i < 3; i++) {
                this.enemies.spawnEnemy(x - (40 * i), y, xDir, yDir);
            }
        }
    }
}

export default scene_Play;