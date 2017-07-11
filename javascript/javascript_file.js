$(document).ready(function(){
	var $bjc=$(".btn-java-click");
	$bjc.click(function(){
		$bjc.toggleClass("clickEvent");
	});

	var $bjh=$(".btn-java-hover");
	$bjh.hover(function(){
		$bjh.toggleClass("hoverEvent");
	});

})
