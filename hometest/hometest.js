
$(document).ready(function() {

	$(".language").click(loadLanguage2);

	loadLanguage2();

});

function loadLanguage2() {

	var url = "/content/hometest_" + CurrentLanguage + ".json"; 

	$.get(url, function(data) {

		var introductionHtml = $(".biosure_paragraphs_introduction");
		introductionHtml.html("");

		for (var i = 0; i < data.paragraphs_introduction.length; i++) {
			var html = "<div class='biosure_paragraph'>" + data.paragraphs_introduction[i] + "</div>";
			introductionHtml.append(html);
		}

		$(".biosure_button_buy").html(data.button_buy);

		$(".biosure_text_block_campaign").html(data.text_campaign);

		$(".hometest_video_hiv_testing").attr("src", data.video.home_test.url);
		$(".hometest_video_tutorial").attr("src", data.video.instruction.url);

		$(".biosure_header_important").html(data.header_important);

		var importantHtml = $(".biosure_paragraphs_important");
		importantHtml.html("");

		for (var i = 0; i < data.paragraphs_important.length; i++) {
			var html = "<div class='biosure_paragraph'>" + data.paragraphs_important[i] + "</div>";
			importantHtml.append(html);
		}

		$(".biosure_header_single_use").html(data.header_single_use);

		var warningHtml = $(".biosure_paragraphs_warning");
		warningHtml.html("");

		for (var i = 0; i < data.paragraphs_warning.length; i++) {
			var html = "<div class='biosure_paragraph'>" + data.paragraphs_warning[i] + "</div>";
			warningHtml.append(html);
		}

		setMinContentHeight(".biosure_wrapper");
	});
}







