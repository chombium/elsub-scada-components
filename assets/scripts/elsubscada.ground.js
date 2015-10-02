function Ground(snap, positionX, positionY, width, height, color) {
    this.snap      = snap;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width     = width;
    this.height    = height;
    this.color     = color;
    
    this.attr      = {
        stroke: this.color,
        strokeWidth: strokeWidth, 
    }
    
    this.draw = function(){
      var line = this.snap.line(this.positionX, this.positionY, this.width, this.height);
      line.attr(this.attr);
      
//        var t = this.snap.text(100, 100, "Hello World");
    }
}