$( document ).ready(function() {

	var copyrightYear = $("#copyright-year").get(0);
	copyrightYear.innerHTML = getAnno();

	var siteThumbs = $("ul#showcase li div");

//indicizza le anteprime in miniatura (thumbnails o thumbs)
	siteThumbs.each(function(index){
		$(this).attr('rel', 'thumb'+(index+1));
	});


	siteThumbs.on("mouseenter", function(){
		$(this).animate({
			backgroundColor: "rgba(255,255,255,0)"
			}, 500, function() {
			// Animation complete.
		});
	});
	siteThumbs.on("mouseleave", function(){
		$(this).animate({
			backgroundColor: "rgba(255,255,255,0.4)"
		}, 100, function() {
			// Animation complete.
		});
	});
/*
	$items = $("ul#showcase li");
	$items.on("click", function(){
		colortmp = $(this).css("background-color");
		//$("#portfolio").css("background-color", colortmp);
		$(this).css("background-color", "transparent");
		$(this).css("border", "1px solid "+colortmp);
		$("#portfolio").css("background-image", 'url("images/casaenergia.jpg")');

	});
	*/
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

//	misura();

});

function misura(){
	$('.misura').css('color', 'yellow');
}
function getAnno(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var year = today.getFullYear();
	return year;
}
