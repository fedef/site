$( document ).ready(function() {

	var bordo;

	$("ul#showcase li div").on("mouseenter", function(){
		$(this).animate({
			backgroundColor: "rgba(255,255,255,0)"
			}, 500, function() {
			// Animation complete.
		});

	});
	$("ul#showcase li div").on("mouseleave", function(){
		$(this).animate({
			backgroundColor: "rgba(255,255,255,0.6)"
		}, 100, function() {
			// Animation complete.
		});

	});

	$items = $("ul#showcase li");
	$items.on("click", function(){
		colortmp = $(this).css("background-color");
		$("#portfolio").css("background-color", colortmp);

	});
//
// $("ul#showcase #amministrazionimmobiliari").on("click", function(){
// 	$("#portfolio").css("background-color", "gray");
// });
// $("ul#showcase #commercioequogrosseto").on("click", function(){
// 	$("#portfolio").css("background-color", "red");
// });
// $("ul#showcase #ilsassolinobianco").on("click", function(){
// 	$("#portfolio").css("background-color", "white");
// });

});
