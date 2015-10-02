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
	    debug: true
	});
	bbd.draw();
});