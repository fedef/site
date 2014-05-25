$( document ).ready(function() {
	
	var bordo;
	
	$("ul#showcase li div").on("mouseenter", function(){	
		$(this).fadeTo(500,0.8);
		
	});
	$("ul#showcase li div").on("mouseleave", function(){	
		$(this).fadeTo(100,0.3);
	});
	
	$("ul#showcase li div").on("click", function(){	
		$("#portfolio").css("background-color", "green");
		
	});
	
	
	
});


