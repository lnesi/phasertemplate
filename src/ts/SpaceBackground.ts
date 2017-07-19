class SpaceBackground{
	engine:PhaserGame
	field:Phaser.TileSprite

	constructor(engine:PhaserGame){
		this.engine=engine;
		this.field=this.engine.add.tileSprite(0, 0, 480, 640, 'BackgroundDarkPurple');
		this.engine.registerUpdate(this.update.bind(this));
	}
	
	update(){
		this.field.tilePosition.y += 2;
	}

}