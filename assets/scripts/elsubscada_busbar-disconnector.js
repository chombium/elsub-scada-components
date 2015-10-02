ElSubScada_BusbarDisconnector = function (params) {
    this.snap      = params.snap;
    this.positionX = params.positionX;
    this.positionY = params.positionY;
    this.width     = params.width;
    this.height    = params.height;
    this.debug     = params.debug || false;
    
    if (params.state == undefined){
        this.state = ElSubScada_State.UNDEFINED;
        this.color = ElSubScada_Colors.colorUndefined;
    } else {
        this.state = params.state;
        this.color = ElSubScada_Colors.colorUndefined;
    }
    
    this.attr      = {
        stroke: this.color,
        strokeWidth: ElSubScada_Pen.strokeWidth,
    }
    
    this.circleAttr = {
        stroke: this.color,
        strokeWidth: ElSubScada_Pen.strokeWidth,
        fill: ElSubScada_Colors.colorFillInaktive
    }
    
    this.draw = function(){
        this.drawGrid();
        
        var third = this.width / 3;
        
        centerX = this.positionX + third/ 2;
        centerY = this.positionY + this.height / 2;
        radius  = third / 2;
        
        var circle = this.snap.circle(centerX, centerY, radius);
        circle.attr(this.circleAttr);
        
        var line = this.snap.line(centerX + ElSubScada_Pen.strokeWidth/2 - 2, 
            this.positionY, centerX + ElSubScada_Pen.strokeWidth/2 - 2, centerY - radius);
        line.attr(this.attr);

        var line = this.snap.line(centerX + ElSubScada_Pen.strokeWidth/2 - 2, 
            centerY + radius, centerX + ElSubScada_Pen.strokeWidth/2 - 2, this.positionY + this.height);
        line.attr(this.attr);
    }
    
    this.drawGrid = function(){
        if (this.debug === false) return;
        
        var third = this.width / 3;
        
        var gridAttr = {
            stroke: "#000",
            strokeWidth: 3,
            fill: ElSubScada_Colors.colorFillInaktive
        }
        var drawrect = this.snap.rect(this.positionX, this.positionY, this.width, this.height);
        drawrect.attr(gridAttr);
        
        var line1 = this.snap.line(this.positionX + third, this.positionY, this.positionX + third, this.positionY + this.height);
        line1.attr(gridAttr);
        
        var line2 = this.snap.line(this.positionX + 2 * third, this.positionY, this.positionX + 2 * third, this.positionY + this.height);
        line2.attr(gridAttr);
        
        var line2 = this.snap.line(this.positionX, this.positionY + this.height/2, 
            this.positionX + this.width, this.positionY + this.height/2);
        line2.attr(gridAttr);
        
        var line2 = this.snap.line(this.positionX +third/2, this.positionY, 
            this.positionX +third/2, this.positionY + this.height);
        line2.attr(gridAttr);
    }
}


