class Game{
	engine: Object;
	constructor(){
		var w=window.innerWidth*window.devicePixelRatio;
		var h=window.innerHeight*window.devicePixelRatio;
		this.engine=new Phaser.Game(w,h, Phaser.CANVAS, '', { preload: this.preload, create: this.created });
	}
	preload(){
		console.log("PRELOAD");
	}
	created(){
		console.log("CREATED");
	}
}