$(document).ready(function(){
	/* Select the click button*/
	var $bjc=$(".btn-java-click");
	$bjc.click(function(){
		/* Apply or remove a specific class on the button to apply an effect*/
		$bjc.toggleClass("clickEvent");
	});

	/* Select the hover button*/
	var $bjh=$(".btn-java-hover");
	$bjh.hover(function(){
		/* Apply or remove a specific class on the button to apply an effect*/
		$bjh.toggleClass("hoverEvent");
	});

})
