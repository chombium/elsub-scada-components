$(document).ready(function(){
    console.log("Test 12334 sdfsdfsdf");
    
	var snap = Snap("#scada");
	
	var clk = function clickHanlder(){
	    console.log('od nadvor!');
	    
	    if (bbd.getState() === 0){
	        bbd.setState(1);
	    } else {
	        bbd.setState(0);
	    }
	}
	
	var bbd = new ElSubScada_CircuitBreaker({
	    snap: snap,
	    positionX: 10,
	    positionY: 10,
	    width: 10 + ElSubScada_Dimensions.elementWidth,
	    height: 10 + ElSubScada_Dimensions.elementHeight,
	    color: "#000",
	    colorUndefined: ElSubScada_Colors.colorUndefined,
	    colorLevel: ElSubScada_Colors.color35,
	    colorFillOff: ElSubScada_Colors.colorFillInaktive,
//	    state: 0
	    labelText: 'Teeest',
	    clickHandler: clk,
//        debug: true,
	});
	bbd.draw();
	
	
	$('#on').click(function(){
	    bbd.setState(ElSubScada_State.ON);
	});
	$('#off').click(function(){
	    bbd.setState(ElSubScada_State.OFF);
	});
	$('#undefined').click(function(){
	    bbd.setState(ElSubScada_State.UNDEFINED);
	});
	$('#setText').keydown(function(event){
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
	        console.log('eeee    ' + $('#setText').val());
	        bbd.setLabelText($('#setText').val());
	    }
	});
});


