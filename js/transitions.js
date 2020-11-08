$("nav a").on("click", function (event) {

	event.preventDefault()

	const href = $(this).attr("href")

	window.history.pushState(null, null, href)

	$("nav a").removeClass("selected")
	$(this).addClass("selected")


	$.ajax({
		url: href, 
		success: function (data){
			$("section").fadeOut(250, function(){

				const newPage = $(data).filter("section").html()

				$("section").html(newPage)

				$("section").fadeIn(250)
			})
		}
	})

})
