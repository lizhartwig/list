$(document).ready(function() {
	$("#blanks form").submit(function(event) {
		var favoritething1Input = $("input#favoritething1").val();
		var favoritething2Input = $("input#favoritething2").val();
		var favoritething3Input = $("input#favoritething3").val();

		$(".favoritething1").text(favoritething1Input);
		$(".favoritething2").text(favoritething2Input);
		$(".favoritething3").text(favoritething3Input);

		$("#finallist").show();

		event.preventDefault();
	});
});