class HeroFunLevel1 extends HeroGun{
	constructor(ship:HeroShip){
		super(ship,"gun06.png","laserBlue01.png");
		this.bulletSpeed=500;
		this.reloadTime=500;
	}
}