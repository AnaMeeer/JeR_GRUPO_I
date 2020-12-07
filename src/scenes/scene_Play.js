import Lunaran from '../gameObjects/lunaran.js';
import Balas from '../gameObjects/balas.js';
import Enemies from '../gameObjects/enemy.js';
import Lasers from '../gameObjects/laser.js';
import Barreras from '../gameObjects/barrera.js';
import Vidas from '../gameObjects/vidas.js';
import Barra from '../gameObjects/barra.js';

//variables
var amountDamageBullet = 50; //una bala normal les hace 1 de daño.
var amountDamageLaser = 10; //el laser hace 50 de daño
var amountDamageEnemy = 100;

class scene_Play extends Phaser.Scene {
    constructor() {
        super({ key: "scene_Play" });
    }


    create() {
        var that = this;
        this.primeravez = true;
        this.count = 0;

        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoNegro').setScale(3.0);
        this.texto = this.add.bitmapText(100, 50, 'NierFont', "", 20);
        this.score = 0;
        this.texto.text = "Puntos: " + "0";

        this.iconoPausa = this.add.image(900 - 30, 0 + 30, 'iconPausa').setInteractive({ useHandCursor: true });

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
        this.bulletsP1 = new Balas(this);
        this.bulletsP2 = new Balas(this);

        this.payerBulletYSpeed = -300;

        //PowerUp - Láser desintegrador.
        this.lasers = new Lasers(this);
        this.bulletSpeed = -1000;

        //PowerUp - Rezo desesperado.
        this.barreras = new Barreras(this);

        //Enemigos
        this.enemies = new Enemies(this);

        this.muerteEnemigoSound = this.sound.add("muerteEnemigo");
        that.muerteEnemigoSound.setVolume(0.1);
        this.muerteEnemigoSound.setMute(true);

        //Colisión Bala-Jugador1
        function player1Hit(player, bullet) {
            bullet.die();
            that.sistemaVida.damage(amountDamageEnemy);
        }
        //Colisión Bala-Jugador2
        function player2Hit(player, bullet) {
            bullet.die();
            that.sistemaVida2.damage(amountDamageEnemy);
        }

        //Colisión BalaP1-Enemigo
        function bullet1Enemy(bullet, enemy) {
            bullet.die();

            if (that.primeravez) {
                that.score -= 250;
                that.primeravez = false;

            }
            else {
                if (enemy.damageEnemy(amountDamageBullet)) {
                    that.score += 5;
                    that.count++;
                    that.texto.text = "Puntos: " + that.score;
                    console.log(that.primeravez);
                    that.barraEnergia.increasePowerUp(10);
                }
            }
            if (that.count >= 50) {
                that.muerteEnemigoSound.setMute(false);
                that.muerteEnemigoSound.play();
            }
            if (that.count <= 50) {
                that.barraEnergia.decrease(100);
                that.muerteEnemigoSound.setMute(true);
            }
        }

        //Colisión BalaP2-Enemigo
        function bullet2Enemy(bullet, enemy) {
            bullet.die();
            if (enemy.damageEnemy(amountDamageBullet)) {
                that.score += 5;
                that.count++;
                that.texto.text = "Puntos: " + that.score;
                console.log(that.primeravez);
                that.barraEnergia2.increasePowerUp(10);
            }
            if (that.count >= 50) {
                that.muerteEnemigoSound.setMute(false);
                that.muerteEnemigoSound.play();
            }
        }

        //Balas de Enemigos
        this.enemyBullets = new Balas(this);

        //Vidas
        this.sistemaVida = new Vidas(this);
        this.sistemaVida2 = new Vidas(this);
        this.sistemaVida.createHealthSistem(40, 425);
        this.sistemaVida2.createHealthSistem(780, 425);

        //barras
        this.barraEnergia = new Barra(this, 0x0033ff);
        this.barraEnergia.createBar(20, 450, 0);  //Azul. Empieza vacía.
        this.barraEnergia2 = new Barra(this, 0x0033ff);
        this.barraEnergia2.createBar(750, 450, 0);
        this.barraDash = new Barra(this, 0xff7514);
        this.barraDash.createBar(20, 470, 100);   //Naranja. Empieza llena.
        this.barraDash2 = new Barra(this, 0xff7514);
        this.barraDash2.createBar(750, 470, 100);


        //Colisiones 
        this.physics.add.collider(this.bulletsP1, this.enemies, bullet1Enemy);  //colision con una bala
        this.physics.add.collider(this.bulletsP2, this.enemies, bullet2Enemy);
        this.physics.add.collider(this.lasers, this.enemies, laserEnemy);    //colision con el laser
        this.physics.add.overlap(this.player1, this.enemyBullets, player1Hit);
        this.physics.add.overlap(this.player2, this.enemyBullets, player2Hit);
        this.physics.add.overlap(this.barreras, this.enemyBullets, barrera);
        this.physics.add.overlap(this.barreras, this.enemies, barrera);


        this.timerSpawn = this.time.addEvent({ delay: 1000, callback: spawnerFunc, callbackScope: this, loop: true });
        this.timerDisparo = this.time.addEvent({ delay: 300, callback: shootFunc, callbackScope: this, loop: true });
        this.timerDisparoEnemigo = this.time.addEvent({ delay: 5000, callback: enemyShoot, callbackScope: this, loop: true });

        //impacto del laser contra un enemigo
        function laserEnemy(laser, enemy) {
            if (enemy.damageEnemy(amountDamageLaser)) {
                that.score += 5;
                that.count++;
                that.texto.text = "Puntos: " + that.score;
                that.muerteEnemigoSound.setMute(false);
                that.muerteEnemigoSound.play();
            }
        }
    }

    update(time, delta) {
        //CONTROLES

        //PowerUp: Laser desintegrador        
        if (this.cursor_q.isDown && (this.barraEnergia.value > 0)) {
            this.lasers.fireLaser(this.player1.x, this.player1.y, 0, this.bulletSpeed);
            this.barraEnergia.decrease(0.33);
        }

        //PowerUp: Rezo desesperado
        if (this.cursor_u.isDown) {
            if (this.barraEnergia2.value === 100) {
                this.barreras.crearBarrera(this.player2.x, (this.player2.y - 20));
            }
        }
        if (this.barreras.isAlive() == true) {
            this.barraEnergia2.decrease(0.33);
        }
        if (this.barraEnergia2.value == 0) {
            this.barreras.killBarrier();
        }

        //Player 1
        if (this.cursor_a.isDown) {
            this.player1.body.setVelocityX(-200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityX(-1000); //velocidad del dash
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_d.isDown) {
            this.player1.body.setVelocityX(200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityX(1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_w.isDown) {
            this.player1.body.setVelocityY(-200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityY(-1000);
                this.barraDash.decrease(8);
            }
        }
        else if (this.cursor_s.isDown) {
            this.player1.body.setVelocityY(200);
            if (this.cursor_e.isDown && (this.barraDash.value > 0)) {
                this.player1.body.setVelocityY(1000);
                this.barraDash.decrease(8);
            }
        }
        else {
            this.player1.body.setVelocity(0);
        }

        //Player 2
        if (this.cursor_k.isDown) {
            this.player2.body.setVelocityY(200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityY(1000);
                this.barraDash2.decrease(8);
            }
        }
        else if (this.cursor_i.isDown) {
            this.player2.body.setVelocityY(-200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityY(-1000);
                this.barraDash2.decrease(8);
            }
        }
        else if (this.cursor_l.isDown) {
            this.player2.body.setVelocityX(200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityX(1000);
                this.barraDash2.decrease(8);
            }
        }
        else if (this.cursor_j.isDown) {
            this.player2.body.setVelocityX(-200);
            if (this.cursor_o.isDown && (this.barraDash.value > 0)) {
                this.player2.body.setVelocityX(-1000);
                this.barraDash2.decrease(8);
            }
        }
        else {
            this.player2.body.setVelocity(0);
        }

        //Barras
        if (this.cursor_e.isUp) {
            this.barraDash.increaseDash();
        }
        if (this.cursor_o.isUp) {
            this.barraDash2.increaseDash();
        }

        //Menu
        this.iconoPausa.on('pointerdown', () => {
            this.scene.sleep();
        })
    }
}



function shootFunc() {
    this.bulletsP1.fireBullet(this.player1.x, this.player1.y, 0, this.payerBulletYSpeed);
    this.bulletsP2.fireBullet(this.player2.x, this.player2.y, 0, this.payerBulletYSpeed);
}


function spawnerFunc() {
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
        else {
            x = 930
            xDir = -200
            yDir = Phaser.Math.Between(-20, 20);
            for (var i = 0; i < 3; i++) {
                this.enemies.spawnEnemy(x - (40 * i), y, xDir, yDir);
            }
        }
    }
}

function enemyShoot() {
    var arrayEnemies = this.enemies.getChildren();
    var enemigo;
    var eX;
    var eY;
    var eXDir;
    var eYDir;
    for (let i = 0; i < arrayEnemies.length; i++) {
        enemigo = arrayEnemies[i]
        eX = enemigo.body.position.x;
        eY = enemigo.body.position.y;

        if (i % 2) {
            eXDir = (this.player1.x - arrayEnemies[i].body.position.x) / 2;
            eYDir = (this.player1.y - arrayEnemies[i].body.position.y) / 2;
        }
        else {
            eXDir = (this.player2.x - arrayEnemies[i].body.position.x) / 2;
            eYDir = (this.player2.y - arrayEnemies[i].body.position.y) / 2;
        }
        this.enemyBullets.fireBullet(eX, eY, eXDir, eYDir);
    }
}

function barrera(barrera, bala) {
    bala.die();
}

export default scene_Play;