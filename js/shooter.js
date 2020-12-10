//здесь будет класс игры (shooter)
class Shooter{
	constructor(idHolst){
		this.canvas = document.querySelector(idHolst);
		this.scena = this.canvas.getContext("2d");
		this.cosmos = new Image();
		this.cosmos.src = "images/space.jpg";
		
	}
	update(){
        
    };
	draw(){
        this.scena.drawImage(this.cosmos,0,0,this.canvas.width,this.canvas.height);
    };
    run(){
        this.update();
        this.draw();
       window.requestAnimationFrame(this.run.bind(this)); 
        
    }
}
window.addEventListener("load", function(){
var shooter = new Shooter("#holst");
shooter.run();
//var shooter
//var shooter	
});



