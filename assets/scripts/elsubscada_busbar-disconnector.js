ElSubScada_BusbarDisconnector = function (params) {
    this.snap           = params.snap;
    this.positionX      = params.positionX;
    this.positionY      = params.positionY;
    this.width          = params.width;
    this.height         = params.height;
    this.label          = params.label;
    this.colorUndefined = params.colorUndefined;
    this.colorFillOff   = params.colorFillOff;
    this.colorLevel     = params.colorLevel;
    this.labelText      = params.labelText || '';
    this.debug          = params.debug || false;
    
    // config params used for drawing
    this.third    = this.width / 3;
    this.twelveth = this.width / 12;
    
    if (params.state == undefined){
        this.state = ElSubScada_State.UNDEFINED;
    } else {
        this.state = params.state;
    }
    
    this.getElementAttr = function(state){
        leadAttr   = {};
        leadAttr.strokeWidth = ElSubScada_Pen.strokeWidth;
        
        bodyAttr = {};
        bodyAttr.strokeWidth = ElSubScada_Pen.strokeWidth;
        
        switch (state) {
        case ElSubScada_State.ON:
            leadAttr.stroke = this.colorLevel;
            bodyAttr.stroke = this.colorLevel;
            bodyAttr.fill = this.colorLevel;
            break;
        case ElSubScada_State.OFF:
            leadAttr.stroke = this.colorLevel;
            bodyAttr.stroke = this.colorLevel;
            bodyAttr.fill = this.colorFillOff;
            break;
        default:
            leadAttr.stroke = this.colorUndefined;
            bodyAttr.stroke = this.colorUndefined;
            bodyAttr.fill = this.colorUndefined;
        }

        return {
            leadAttr   : leadAttr,
            bodyAttr : bodyAttr
        }
    }
    
    attrs = this.getElementAttr(this.state);
    
    this.draw = function(){
        this.drawGrid();
        
        centerX = this.positionX + this.third/ 2;
        centerY = this.positionY + this.height / 2;
        radius  = this.third / 2;
        
        this.body = this.snap.circle(centerX, centerY, radius);
        this.body.attr(attrs.bodyAttr);
        
        var line = this.snap.line(centerX + ElSubScada_Pen.strokeWidth/2 - 2, 
            this.positionY, centerX + ElSubScada_Pen.strokeWidth/2 - 2, centerY - radius);

        var line1 = this.snap.line(centerX + ElSubScada_Pen.strokeWidth/2 - 2, 
            centerY + radius, centerX + ElSubScada_Pen.strokeWidth/2 - 2, this.positionY + this.height);
        
        this.leads = this.snap.group(line, line1);
        this.leads.attr(attrs.leadAttr);
        
        if (this.labelText !== ''){
            this.label = this.snap.text(this.positionX +this.third + this.twelveth, centerY + this.height/4, this.labelText);
        }
    }
    
    this.setLabelText = function(text) {
        this.label.remove();
        this.label = this.snap.text(this.positionX +this.third + this.twelveth, centerY + this.height/4, text);
    }
    
    this.setState = function(state) {
        this.state = state;
        
        attrs = this.getElementAttr(state);
        
        this.leads.attr(attrs.leadAttr)
        this.body.attr(attrs.bodyAttr)
    }
    
    this.drawGrid = function(){
        if (this.debug === false) return;
        
        var gridAttr = {
            stroke: "#000",
            strokeWidth: 2,
            fill: ElSubScada_Colors.colorFillInaktive
        }
        var drawrect = this.snap.rect(this.positionX, this.positionY, this.width, this.height);
        drawrect.attr(gridAttr);
        
        var line1 = this.snap.line(this.positionX + this.third, this.positionY, this.positionX + this.third, this.positionY + this.height);
        line1.attr(gridAttr);
        
        var line2 = this.snap.line(this.positionX + 2 * this.third, this.positionY, this.positionX + 2 * this.third, this.positionY + this.height);
        line2.attr(gridAttr);
        
        var line2 = this.snap.line(this.positionX, this.positionY + this.height/2, 
            this.positionX + this.width, this.positionY + this.height/2);
        line2.attr(gridAttr);
        
        var line2 = this.snap.line(this.positionX +this.third/2, this.positionY, 
            this.positionX +this.third/2, this.positionY + this.height);
        line2.attr(gridAttr);
        
        var line2 = this.snap.line(this.positionX +this.third + this.twelveth, this.positionY, 
            this.positionX +this.third + this.twelveth, this.positionY + this.height);
        line2.attr(gridAttr);
    }
}
