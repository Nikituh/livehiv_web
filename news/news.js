
var base = "../content/";

$(document).ready(function() {

	$(".language").click(loadLanguage2);

	loadLanguage2();
});


function loadLanguage2() {

	$.get(base + "news_" + CurrentLanguage + ".json", function(data) {
		loadNews(data);
	});
}

function loadNews(data) {

	var container = $(".news_items_wrapper");

	container.html("");
	
	var readMoreLabel = data.read_more_button_label;

	for (var i = 0; i < data.articles.length; i++) {

		var article = data.articles[i];
		container.append(UI_getArticleSummary(readMoreLabel, article));
	}
}