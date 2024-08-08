class Painter {
    constructor() {
        
        this.previousX = null;
        this.previousY= null;
    }

    penDown(x, y) {
    strokeWeight(4);
      if (this.previousX && this.previousY) {
         line(x, y, this.previousX , this.previousY);
      }
      this.previousX = x;
      this.previousY = y;
    }
  
  penDownBl(x, y) {
    strokeWeight(4);
      stroke("black");    
      if (this.previousX && this.previousY) {
         line(x, y, this.previousX , this.previousY);
      }
      this.previousX = x;
      this.previousY = y;
    
    }
  
  penDownR(x, y) {
    strokeWeight(4);
    stroke("#F13C10");
      if (this.previousX && this.previousY) {
         line(x, y, this.previousX , this.previousY);
      }
      this.previousX = x;
      this.previousY = y;
    }
  
  penDownG(x, y) {
    strokeWeight(4);
    stroke("#098B15");
      if (this.previousX && this.previousY) {
         line(x, y, this.previousX , this.previousY);
      }
      this.previousX = x;
      this.previousY = y;
    }
  penDownB(x, y) {
    strokeWeight(4);
    stroke("#A620CA");
      if (this.previousX && this.previousY) {
         line(x, y, this.previousX , this.previousY);
      }
      this.previousX = x;
      this.previousY = y;
    }
  
    penUp() {
      this.previousX = null;
      this.previousY = null;
    }
}
