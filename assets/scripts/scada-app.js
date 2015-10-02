$(document).ready(function(){
    console.log("Test 12334 sdfsdfsdf");
    
	var snap = Snap("#scada");
	
	var bbd = new ElSubScada_BusbarDisconnector({
	    snap: snap,
	    positionX: 10,
	    positionY: 10,
	    width: 10 + ElSubScada_Dimensions.elementWidth,
	    height: 10 + ElSubScada_Dimensions.elementHeight,
	    color: "#000",
	    colorUndefined: ElSubScada_Colors.colorUndefined,
	    colorOn: ElSubScada_Colors.color35,
	    colorOff: ElSubScada_Colors.colorOff,
	    colorFillOff: ElSubScada_Colors.colorFillInaktive,
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
});


