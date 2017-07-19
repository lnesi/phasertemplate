class HeroBullet{
	engine:PhaserGame;
	bullet:Phaser.Sprite;
	updateIndex:number;
	constructor(ship:HeroShip){
		this.engine=ship.engine;
		
		this.bullet=this.engine.add.sprite(0, 0,  'mainsprite', 'laserBlue01.png');
		this.bullet.anchor.setTo(0.5,0.5);
		this.bullet.x=ship.getX();
		this.bullet.y=ship.getY();

		this.engine.physics.enable(this.bullet, Phaser.Physics.ARCADE);
		
		this.updateIndex=this.engine.registerUpdate(this.update.bind(this));
		
		this.bullet.body.velocity.y=-400;
		//this.physics_body.body.collideWorldBounds = true;
		//
		
	}

	update(){
		console.log('bulletAlive',this.updateIndex);
		if(this.bullet.y<-100 ){
			this.engine.unregisterUpdate(this.updateIndex);
			this.bullet.destroy();
		}
	}
}