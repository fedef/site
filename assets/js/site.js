(function(){

	var partialsCache ={};

	function getContent(fragmentId, callback){
		if(partialsCache[fragmentId])
			callback(partialsCache[fragmentId]);
		else{
			$.get(fragmentId + ".html", function(content){
				partialsCache[fragmentId] = content;
				callback(content);
			});

		}
	}

	function setActiveLink(){
		var	links = $("ul.menu a");
		links.removeClass("active");
		var link = $("ul.menu a[href='#"+fragmentId+"']");
		link.addClass("active");
	}

	function navigate(){
		fragmentId = location.hash.substr(1);
		getContent(fragmentId, function(content){
			$("#main").html(content);
		});
		setActiveLink(fragmentId);
	}
	///////
	$( document ).ready(function() {

		if(!location.hash){
			location.hash = "#home";
		}

		navigate();

		$(window).bind("hashchange", navigate);

	////

		var copyrightYear = $("#copyright-year").get(0);
		copyrightYear.innerHTML = getAnno();

		var siteThumbs = $("ul#showcase li div");

	//indicizza le anteprime in miniatura (thumbnails o thumbs)
		siteThumbs.each(function(index){
			$(this).attr('rel', 'thumb'+(index+1));
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
}());
