class HeroGun{
	engine:PhaserGame
	gunBody:Phaser.Sprite
	reloadTime:number=500
	bulletSpeed:number=500
	deltaTime:number=0
	bullets:Phaser.Group
	ship:HeroShip
	constructor(ship:HeroShip,gunTexture:string,bulletTexture:string){
		this.engine=ship.engine;
		this.ship=ship;
		this.gunBody = this.engine.add.sprite(0, 0 , 'mainsprite', gunTexture);
		this.gunBody.y=-this.gunBody.height;
		ship.displayGroup.add(this.gunBody,false,0);
		this.gunBody.anchor.setTo(0.5,0.5);
		this.gunBody.angle=180;
		this.deltaTime=this.engine.time.now;

	

		this.bullets = this.engine.add.group();
	    this.bullets.enableBody = true;
	    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
	    this.bullets.createMultiple(10, 'mainsprite',bulletTexture);
	    this.bullets.setAll('anchor.x', 0.5);
	    this.bullets.setAll('anchor.y', 1);
	    this.bullets.setAll('outOfBoundsKill', true);
	    this.bullets.setAll('checkWorldBounds', true);
	    this.engine.world.setChildIndex(this.bullets,1);
		
	}

	fire(){
		if(this.engine.time.now>this.deltaTime){
			console.log("Fire");
			var bullet = this.bullets.getFirstExists(false);
			bullet.reset(this.ship.getX(), this.ship.getY()-bullet.height+10);
			
			bullet.body.velocity.y = -this.bulletSpeed;
			this.deltaTime=this.engine.time.now+this.reloadTime;
		}
		
	}
}